package jp.co.takashi.sample.login.controller;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import jp.co.takashi.sample.login.dto.login.LoginRequest;
import jp.co.takashi.sample.login.dto.login.LoginResult;
import jp.co.takashi.sample.login.service.LoginService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class LoginController {

    private final LoginService loginService;

    public LoginController(LoginService loginService) {
        this.loginService = loginService;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest req, HttpServletRequest request) {

        // ① LoginService に認証処理を任せる
        LoginResult result = loginService.login(req);

        if (!result.isSuccess()) {
            return ResponseEntity.status(401).body(result.getMessage());
        }

        // ② ★ セッションを強制生成
        HttpSession session = request.getSession(true);

        // ③ ★ SecurityContext をセッションに保存
        session.setAttribute("SPRING_SECURITY_CONTEXT", SecurityContextHolder.getContext());

        // ④ レスポンス
        return ResponseEntity.ok(result);
    }
}