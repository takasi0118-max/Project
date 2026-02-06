package jp.co.takashi.sample.login.dto.register;

public class RegisterResult {

    private final boolean success;
    private final String message;
    private final String token;
    private final String name;

    public RegisterResult(boolean success, String message, String token, String name) {
        this.success = success;
        this.message = message;
        this.token = token;
        this.name = name;
    }

    public boolean isSuccess() {
        return success;
    }

    public String getMessage() {
        return message;
    }

    public String getToken() {
        return token;
    }

    public String getName() {
        return name;
    }
}