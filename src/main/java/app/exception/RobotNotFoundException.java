package app.exception;

public class RobotNotFoundException extends RuntimeException{

    public RobotNotFoundException(String msg) {
        super(msg);
    }
}
