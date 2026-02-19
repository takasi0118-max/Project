package jp.co.takashi.sample.login.dto.task;

import java.time.LocalDate;

import jp.co.takashi.sample.login.entity.TaskEntity;

import jp.co.takashi.sample.login.entity.TaskStatus;
import lombok.Getter;
import jp.co.takashi.sample.login.entity.TaskPriority;

@Getter
public class TaskResult {
    private Long id;
    private String title;
    private String description;
    private TaskStatus status;
    private TaskPriority priority;
    private LocalDate dueDate;
    private String assignedTo;

    public TaskResult(TaskEntity task) {
        this.id = task.getId();
        this.title = task.getTitle();
        this.description = task.getDescription();
        this.status = task.getStatus();
        this.priority = task.getPriority();
        this.dueDate = task.getDueDate();
        this.assignedTo = task.getAssignedTo();
    }
}
