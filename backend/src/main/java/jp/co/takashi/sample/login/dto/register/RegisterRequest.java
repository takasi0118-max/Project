package jp.co.takashi.sample.login.dto.register;

import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;

@Getter
@Setter
@NoArgsConstructor
public class RegisterRequest {
    private String name;
    private String email;
    private String password;
}