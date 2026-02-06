package jp.co.takashi.sample.login.service;

import jp.co.takashi.sample.login.dto.login.LoginRequest;
import jp.co.takashi.sample.login.dto.login.LoginResult;
import jp.co.takashi.sample.login.entity.MemberEntity;
import jp.co.takashi.sample.login.repository.MemberRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class LoginService {

    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;

    public LoginService(MemberRepository memberRepository, PasswordEncoder passwordEncoder) {
        this.memberRepository = memberRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public LoginResult login(LoginRequest req) {

        MemberEntity member = memberRepository.findByEmail(req.getEmail())
                .orElse(null);

        if (member == null) {
            return new LoginResult(false, "メールアドレスが存在しません", null, null);
        }

        if (!passwordEncoder.matches(req.getPassword(), member.getPassword())) {
            return new LoginResult(false, "パスワードが違います", null, null);
        }

        // 本来は JWT を生成するが、まずはダミー token を返す
        String token = "dummy-token";

        return new LoginResult(true, "ログイン成功", token, member.getName());
    }
}