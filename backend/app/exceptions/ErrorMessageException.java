package exceptions;

public class ErrorMessageException {
    private String message;

    public ErrorMessageException(String message){
        this.message = message;
    }

    public String getMessage(){
        return this.message;
    }

}