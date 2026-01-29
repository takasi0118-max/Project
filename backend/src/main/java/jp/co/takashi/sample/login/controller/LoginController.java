package jp.co.takashi.sample.login.controller;

import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api")
public class LoginController {

    @PostMapping("/login")
    public Map<String, String> login(@RequestBody Map<String, String> body) {
        String email = body.get("email");
        String password = body.get("password");

        // 仮の認証（本番はDBでチェック）
        if ("test@example.com".equals(email) && "1234".equals(password)) {
            return Map.of("message", "ログイン成功！");
        } else {
            return Map.of("message", "メールアドレスまたはパスワードが違います");
        }
    }
}
