package jp.co.takashi.sample.login.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import jp.co.takashi.sample.login.repository.MemberRepository;

@RestController
public class TestController {

    private final MemberRepository memberRepository;

    public TestController(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    @GetMapping("/test-db")
    public String testDb() {
        long count = memberRepository.count();
        return "DB OK: " + count;
    }
}