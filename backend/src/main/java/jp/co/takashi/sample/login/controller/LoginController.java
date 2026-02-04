package jp.co.takashi.sample.login.controller;

import jp.co.takashi.sample.login.dto.login.LoginRequest;
import jp.co.takashi.sample.login.dto.login.LoginResult;
import jp.co.takashi.sample.login.service.LoginService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class LoginController {

    private final LoginService loginService;

    public LoginController(LoginService loginService) {
        this.loginService = loginService;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest req) {

        LoginResult result = loginService.login(req);

        if (!result.isSuccess()) {
            return ResponseEntity.status(401).body(result.getMessage());
        }

        return ResponseEntity.ok(result.getMessage());
    }
}