package com.ashu.todo.controller;

import com.ashu.todo.model.Todo;
import com.ashu.todo.service.TodoService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/todos")
@RequiredArgsConstructor
@CrossOrigin
public class TodoController {

    private final TodoService todoService;

    // Create a new Todo
    @PostMapping
    public ResponseEntity<Todo> createTodo(@RequestBody Todo todo) {
        Todo createdTodo = todoService.createTodo(todo);
        return new ResponseEntity<>(createdTodo, HttpStatus.CREATED);
    }

    // Retrieve all Todos
    @GetMapping
    public ResponseEntity<List<Todo>> getAllTodos() {
        List<Todo> todos = todoService.getAllTodos();
        // return new ResponseEntity<>(todos, HttpStatus.OK);
        //or we can write
        return ResponseEntity.ok(todos);
    }

    // Update existing Todo by ID
    @PutMapping("/{id}")
    public ResponseEntity<Todo> getTodoById(@PathVariable String id,@RequestBody Todo updatedTodo) {
       try {
           Todo todo = todoService.updateTodo(id,updatedTodo);
           return new ResponseEntity<>(todo,HttpStatus.OK);

       }catch(IllegalArgumentException e){
           return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);
       }
    }
    //Delete a Todo by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTodoById(@PathVariable String id){
        try {
            todoService.deleteTodo(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch(IllegalArgumentException e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @PatchMapping("/{id}/state/{state}")
    public ResponseEntity<Todo> updateCompleted(@PathVariable String id,
                                                @PathVariable boolean state){
        try {
            Todo todo = todoService.updateState(id,state);
            return ResponseEntity.ok(todo);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @DeleteMapping("/all")
    public void deleteAll(){
        todoService.deleteAll();
    }

}
