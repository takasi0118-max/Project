package jp.co.takashi.sample.login.controller;

import jp.co.takashi.sample.login.dto.register.RegisterRequest;
import jp.co.takashi.sample.login.dto.register.RegisterResult;
import jp.co.takashi.sample.login.service.RegisterService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/members")
public class RegisterController {

    private final RegisterService registerService;

    public RegisterController(RegisterService registerService) {
        this.registerService = registerService;
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest req) {

        RegisterResult result = registerService.register(req);

        if (!result.isSuccess()) {
            return ResponseEntity.status(400).body(result.getMessage());
        }

        Map<String, Object> response = new HashMap<>();
        response.put("token", result.getToken());
        response.put("name", result.getName());

        return ResponseEntity.ok(response);
    }
}