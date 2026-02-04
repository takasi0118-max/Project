package jp.co.takashi.sample.login.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import jp.co.takashi.sample.login.entity.MemberEntity;
import java.util.Optional;

public interface MemberRepository extends JpaRepository<MemberEntity, Long> {
    Optional<MemberEntity> findByEmail(String email);
}