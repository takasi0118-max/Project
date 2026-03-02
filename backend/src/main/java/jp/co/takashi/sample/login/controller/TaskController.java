package jp.co.takashi.sample.login.controller;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.List;

import jp.co.takashi.sample.login.dto.task.TaskRequest;
import jp.co.takashi.sample.login.dto.task.TaskResult;
import jp.co.takashi.sample.login.service.TaskService;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/tasks")
public class TaskController {

    private final TaskService taskService;

    // ★ 新規作成
    @PostMapping
    public TaskResult create(@RequestBody TaskRequest request,
            @AuthenticationPrincipal UserDetails user) {

        return taskService.createTask(request, user.getUsername());
    }

    // ★ 一覧取得
    @GetMapping
    public List<TaskResult> getTasks(@AuthenticationPrincipal UserDetails user) {
        return taskService.getTasks(user.getUsername());
    }

    // ★ 1件取得
    @GetMapping("/{id}")
    public TaskResult getTask(@PathVariable Long id) {
        return taskService.getTask(id);
    }

    // ★ 更新
    @PutMapping("/{id}")
    public TaskResult updateTask(
            @PathVariable Long id,
            @RequestBody TaskRequest request,
            @AuthenticationPrincipal UserDetails user) {

        return taskService.updateTask(id, request, user.getUsername());
    }
}