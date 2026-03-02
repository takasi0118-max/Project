package jp.co.takashi.sample.login.service;

import java.time.LocalDateTime;
import java.util.List;

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

    public List<TaskResult> getTasks(String username) {
        return taskRepository.findAll()
                .stream()
                .map(TaskResult::new)
                .toList();
    }

    public TaskResult getTask(Long id) {
        TaskEntity task = taskRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Task not found"));
        return new TaskResult(task);
    }

    public TaskResult updateTask(Long id, TaskRequest req, String username) {
        TaskEntity task = taskRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Task not found"));

        task.setTitle(req.getTitle());
        task.setDescription(req.getDescription());
        task.setStatus(req.getStatus());
        task.setPriority(req.getPriority());
        task.setDueDate(req.getDueDate());
        task.setAssignedTo(req.getAssignedTo());
        task.setUpdatedBy(username);
        task.setUpdatedAt(LocalDateTime.now());

        TaskEntity saved = taskRepository.save(task);
        return new TaskResult(saved);
    }
}