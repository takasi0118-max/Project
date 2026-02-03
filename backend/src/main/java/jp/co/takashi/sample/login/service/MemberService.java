package jp.co.takashi.sample.login.service;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import jp.co.takashi.sample.login.dto.MemberRequest;
import jp.co.takashi.sample.login.entity.MemberEntity;
import jp.co.takashi.sample.login.repository.MemberRepository;

@Service
public class MemberService {

    private final MemberRepository memberRepository;
    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public MemberService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    public MemberEntity register(MemberRequest request) {

        MemberEntity member = new MemberEntity();
        member.setName(request.getName());
        member.setEmail(request.getEmail());
        member.setPassword(passwordEncoder.encode(request.getPassword()));

        return memberRepository.save(member);
    }
}