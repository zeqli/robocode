package app.robocode.service;

public interface RobotCompiler {
    /**
     *
     * @param packageName
     * @param className
     * @param src
     * @param robocodeClassPath
     * @return
     * @throws Exception
     */
    byte[] compile(
            String packageName,
            String className,
            String src,
            String robocodeClassPath) throws Exception;
}
