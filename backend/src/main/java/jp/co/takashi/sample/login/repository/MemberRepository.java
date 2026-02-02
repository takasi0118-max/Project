package jp.co.takashi.sample.login.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import jp.co.takashi.sample.login.entity.Member;

public interface MemberRepository extends JpaRepository<Member, Long> {

    // メールアドレスで検索したいときに使える
    Member findByEmail(String email);
}