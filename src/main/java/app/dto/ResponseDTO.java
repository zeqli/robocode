package app.dto;

import java.io.Serializable;

public class ResponseDTO<T> implements Serializable{

    private static final long serialVersionUID = 1L;

    private T data;

    private String status;

    public ResponseDTO() {
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
