package jp.co.takashi.sample.login.dto.task;

import java.time.LocalDate;

import jp.co.takashi.sample.login.entity.TaskStatus;
import lombok.Getter;
import lombok.Setter;
import jp.co.takashi.sample.login.entity.TaskPriority;

@Setter
@Getter
public class TaskRequest {
    private String title;
    private String description;
    private TaskStatus status;
    private TaskPriority priority;
    private LocalDate dueDate;
    private String assignedTo;
}
