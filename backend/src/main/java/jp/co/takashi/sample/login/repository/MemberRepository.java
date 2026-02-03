package jp.co.takashi.sample.login.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import jp.co.takashi.sample.login.entity.MemberEntity;

public interface MemberRepository extends JpaRepository<MemberEntity, Long> {
    MemberEntity findByEmail(String email);
}