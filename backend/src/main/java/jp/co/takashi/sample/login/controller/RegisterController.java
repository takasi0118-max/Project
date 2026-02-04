package jp.co.takashi.sample.login.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jp.co.takashi.sample.login.dto.register.RegisterRequest;
import jp.co.takashi.sample.login.dto.register.RegisterResponse;
import jp.co.takashi.sample.login.service.RegisterService;

@RestController
@RequestMapping("/api/members")
public class RegisterController {

    private final RegisterService registerService;

    public RegisterController(RegisterService registerService) {
        this.registerService = registerService;
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest request) {

        RegisterResponse response = registerService.register(request);

        if (!response.isSuccess()) {
            return ResponseEntity.badRequest().body(response.getMessage());
        }

        return ResponseEntity.ok(response.getMessage());
    }
}