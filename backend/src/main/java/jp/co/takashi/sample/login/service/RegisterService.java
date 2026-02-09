package jp.co.takashi.sample.login.service;

import jp.co.takashi.sample.login.dto.register.RegisterRequest;
import jp.co.takashi.sample.login.dto.register.RegisterResult;
import jp.co.takashi.sample.login.entity.MemberEntity;
import jp.co.takashi.sample.login.repository.MemberRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class RegisterService {

    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;

    public RegisterService(MemberRepository memberRepository, PasswordEncoder passwordEncoder) {
        this.memberRepository = memberRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public RegisterResult register(RegisterRequest req) {

        if (memberRepository.findByEmail(req.getEmail()).isPresent()) {
            return new RegisterResult(false, "このメールアドレスは既に登録されています", null, null);
        }

        MemberEntity member = new MemberEntity();
        member.setName(req.getName());
        member.setEmail(req.getEmail());
        member.setPassword(passwordEncoder.encode(req.getPassword()));

        member.setRole("USER");
        memberRepository.save(member);

        String token = "dummy-token";

        return new RegisterResult(true, "登録成功", token, member.getName());
    }
}