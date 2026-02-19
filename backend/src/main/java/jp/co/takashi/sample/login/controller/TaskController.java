package jp.co.takashi.sample.login.controller;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.core.userdetails.UserDetails;

import jp.co.takashi.sample.login.dto.task.TaskRequest;
import jp.co.takashi.sample.login.dto.task.TaskResult;
import jp.co.takashi.sample.login.service.TaskService;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/tasks")
public class TaskController {

    private final TaskService taskService;

    @PostMapping
    public TaskResult create(@RequestBody TaskRequest request,
            @AuthenticationPrincipal UserDetails user) {

        return taskService.createTask(request, user.getUsername());
    }
}
