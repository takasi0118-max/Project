package jp.co.takashi.sample.login.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;

@Getter
@Setter
@NoArgsConstructor
public class MemberRequest {

    private String name;
    private String email;
    private String password;
}
