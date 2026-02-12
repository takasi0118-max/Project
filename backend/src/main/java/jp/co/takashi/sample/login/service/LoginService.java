package jp.co.takashi.sample.login.service;

import jp.co.takashi.sample.login.dto.login.LoginRequest;
import jp.co.takashi.sample.login.dto.login.LoginResult;
import jp.co.takashi.sample.login.entity.MemberEntity;
import jp.co.takashi.sample.login.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
public class LoginService {

    private final MemberRepository memberRepository;

    @Autowired
    private AuthenticationManager authenticationManager;

    public LoginService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    public LoginResult login(LoginRequest req) {

        // ① メールアドレスでユーザー検索
        MemberEntity member = memberRepository.findByEmail(req.getEmail())
                .orElse(null);

        if (member == null) {
            return new LoginResult(false, "メールアドレスが存在しません", null, null, null);
        }

        // ② Spring Security に認証させる（パスワードチェックもここで行われる）
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(req.getEmail(), req.getPassword()));

        // ③ 認証成功を SecurityContext にセット
        SecurityContextHolder.getContext().setAuthentication(authentication);

        // ⑤ レスポンス
        return new LoginResult(true, "ログイン成功", null, member.getName(), member.getRole());
    }
}