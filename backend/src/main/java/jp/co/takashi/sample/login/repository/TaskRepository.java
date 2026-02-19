package jp.co.takashi.sample.login.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import jp.co.takashi.sample.login.entity.TaskEntity;

public interface TaskRepository extends JpaRepository<TaskEntity, Long> {
}