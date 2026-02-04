package jp.co.takashi.sample.login.service;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import jp.co.takashi.sample.login.dto.register.RegisterRequest;
import jp.co.takashi.sample.login.dto.register.RegisterResponse;
import jp.co.takashi.sample.login.entity.MemberEntity;
import jp.co.takashi.sample.login.repository.MemberRepository;

@Service
public class RegisterService {

    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;

    public RegisterService(MemberRepository memberRepository, PasswordEncoder passwordEncoder) {
        this.memberRepository = memberRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public RegisterResponse register(RegisterRequest request) {

        // メール重複チェック
        if (memberRepository.findByEmail(request.getEmail()).isPresent()) {
            return new RegisterResponse(false, "このメールアドレスは既に登録されています");
        }

        MemberEntity member = new MemberEntity();
        member.setName(request.getName());
        member.setEmail(request.getEmail());
        member.setPassword(passwordEncoder.encode(request.getPassword()));

        memberRepository.save(member);

        return new RegisterResponse(true, "登録が完了しました");
    }
}