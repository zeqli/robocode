package app.robocode.service;

import app.dao.IRobotDAO;
import app.entity.Robot;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.io.OutputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.jar.Attributes;
import java.util.jar.JarOutputStream;
import java.util.jar.Manifest;
import java.util.zip.ZipEntry;

@Service("playbattleservice")
public class PlayBattleServiceImpl implements PlayBattleService {

    @Autowired
    IRobotDAO robotDAO;

    @Autowired
    RobotCompiler compiler;


    /**
     *
     * @param robotsMap
     * @return
     * @throws IOException
     */
    @Override
    public List<String> prepareRobots(Map<String, List<String>> robotsMap) throws IOException {
        List<String> packages = new ArrayList<>();
        List<Robot> robots = new ArrayList<>();
        List<String> selectedRobots = new ArrayList<>();
        for(Map.Entry<String, List<String>> entry: robotsMap.entrySet()) {
            String packageId = entry.getKey();
            packages.add(packageId);

            List<String> robotIds = entry.getValue();

            for(String id: robotIds) {
                List<Robot> res = robotDAO.findByPackageIdAndRobotId(packageId, id);
                if (res != null && res.size() > 0) {
                    Robot robot = res.get(0);
                    robots.add(robot);
                    selectedRobots.add(robot.getPackageId() + "." + robot.getRobotId());
                }
            }
        }


        Path jarOut = Files.createTempFile("robots",".jar");

        OutputStream out = Files.newOutputStream(jarOut);


        Manifest manifest = new Manifest();
        manifest.getMainAttributes().put(Attributes.Name.MANIFEST_VERSION, "1.0");

        JarOutputStream jos = new JarOutputStream(out, manifest);

        /* Create package directory inside jar */
        for (String packageId: packages) {
            jos.putNextEntry(new ZipEntry(packageId + "/"));
            jos.closeEntry();
        }

        for (Robot robot : robots) {
            jos.putNextEntry(new ZipEntry(robot.getPackageId() + "/" + robot.getRobotId() + ".class"));
            try {
                jos.write(compiler.compile(robot.getPackageId(), robot.getRobotId(), robot.getRobotSrcCode(), " "));
            } catch (Exception e) {
                e.printStackTrace();
            }
            jos.closeEntry();
        }

        jos.close();

        List<String> res = new ArrayList<>();
        res.add(jarOut.toAbsolutePath().toString());
        res.add(String.join(",", selectedRobots));
        return res;
    }
}
