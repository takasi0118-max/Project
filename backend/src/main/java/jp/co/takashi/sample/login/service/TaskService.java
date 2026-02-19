package jp.co.takashi.sample.login.service;

import java.time.LocalDateTime;

import org.springframework.stereotype.Service;

import jp.co.takashi.sample.login.dto.task.TaskRequest;
import jp.co.takashi.sample.login.dto.task.TaskResult;
import jp.co.takashi.sample.login.entity.TaskEntity;
import jp.co.takashi.sample.login.repository.TaskRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class TaskService {

    private final TaskRepository taskRepository;

    public TaskResult createTask(TaskRequest request, String username) {

        TaskEntity task = new TaskEntity();
        task.setTitle(request.getTitle());
        task.setDescription(request.getDescription());
        task.setStatus(request.getStatus());
        task.setPriority(request.getPriority());
        task.setDueDate(request.getDueDate());
        task.setAssignedTo(request.getAssignedTo());

        task.setCreatedBy(username);
        task.setUpdatedBy(username);
        task.setCreatedAt(LocalDateTime.now());
        task.setUpdatedAt(LocalDateTime.now());

        TaskEntity saved = taskRepository.save(task);
        return new TaskResult(saved);
    }
}