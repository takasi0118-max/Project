package jp.co.takashi.sample.login.security;

import jp.co.takashi.sample.login.entity.MemberEntity;
import jp.co.takashi.sample.login.repository.MemberRepository;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    private final MemberRepository memberRepository;

    public CustomUserDetailsService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {

        // ① メールアドレスでユーザー検索
        MemberEntity member = memberRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        // ② Spring Security が理解できる UserDetails に変換
        return User.withUsername(member.getEmail())
                .password(member.getPassword())
                .roles(member.getRole()) // 例: "USER"
                .build();
    }
}