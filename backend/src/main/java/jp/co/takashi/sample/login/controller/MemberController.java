package jp.co.takashi.sample.login.controller;

import org.springframework.web.bind.annotation.*;
import jp.co.takashi.sample.login.dto.MemberRequest;
import jp.co.takashi.sample.login.entity.MemberEntity;
import jp.co.takashi.sample.login.service.MemberService;

@RestController
@RequestMapping("/api/members")
public class MemberController {

    private final MemberService memberService;

    public MemberController(MemberService memberService) {
        this.memberService = memberService;
    }

    @PostMapping("/register")
    public MemberEntity register(@RequestBody MemberRequest request) {
        return memberService.register(request);
    }
}