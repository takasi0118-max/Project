package jp.co.takashi.sample.login.dto.login;

public class LoginResult {

    private final boolean success;
    private final String message;
    private final String token;
    private final String name;
    private final String role;

    public LoginResult(boolean success, String message, String token, String name, String role) {
        this.success = success;
        this.message = message;
        this.token = token;
        this.name = name;
        this.role = role;
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

    public String getRole() {
        return role;
    }
}