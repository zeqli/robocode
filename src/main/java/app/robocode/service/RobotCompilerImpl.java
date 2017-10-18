package app.robocode.service;

import app.robocode.compiler.InMemoryFileManager;
import app.robocode.compiler.SimpleJavaFileObj;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import javax.tools.*;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service("robotcompilerservice")
public class RobotCompilerImpl implements RobotCompiler {

    @Autowired
    private ResourceLoader resourceLoader;

    private String filePath;


//    public RobotCompilerImpl(ResourceLoader resourceLoader) {
//        this.resourceLoader = resourceLoader;
//    }

    @PostConstruct
    public void init() {
        try {
            Resource resource = resourceLoader.getResource("classpath:/webjar/robocode.jar");
            File jarFile = resource.getFile();
            this.filePath = jarFile.getAbsolutePath();

        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @Override
    public byte[] compile(String packageName, String className, String src, String robocodeClassPath) throws Exception {

        JavaCompiler compiler = ToolProvider.getSystemJavaCompiler();

        DiagnosticCollector<JavaFileObject> diagnosticCollector=new DiagnosticCollector<>();

        InMemoryFileManager fileManager = new InMemoryFileManager(compiler.getStandardFileManager(diagnosticCollector,null,null));

        List<String> options=new ArrayList<>();    // add -cp classpath option, etc here

        options.addAll(Arrays.asList("-classpath", filePath));

        JavaFileObject java_file = new SimpleJavaFileObj(packageName + "." + className, src);

        Iterable<? extends JavaFileObject> unit = Arrays.asList(java_file);

        JavaCompiler.CompilationTask task = compiler.getTask(null, fileManager, diagnosticCollector, options, null, unit);

        boolean success = task.call();
        if(!success){
            StringBuilder sb = new StringBuilder();
            for(Diagnostic d : diagnosticCollector.getDiagnostics()){
                sb.append(d.getCode());
                sb.append(d.getKind());
                sb.append(d.getPosition());
                sb.append(d.getStartPosition());
                sb.append(d.getEndPosition());
                sb.append(d.getSource());
                sb.append(d.getMessage(null));
            }
            throw new Exception(sb.toString());
        }else{
            return fileManager.getClassBytes();
        }
    }
}
