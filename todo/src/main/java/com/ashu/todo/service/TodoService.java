package com.ashu.todo.service;

import java.util.List;

import com.ashu.todo.model.Todo;
import com.ashu.todo.repository.TodoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class TodoService {
    private final TodoRepository repository;


    public Todo createTodo(Todo todo){
        return repository.save(todo);
    }
    public List<Todo> getAllTodos() {
        return repository.findAll();
    }
    public Todo updateTodo(String id , Todo updatedTodo){
        if(!repository.existsById(id)){
            throw new IllegalArgumentException("Todo with id "+ id);
        }
      updatedTodo.setId(id);
        return repository.save(updatedTodo);
    }

    public void deleteTodo(String id) {
        if (!repository.existsById(id)) {
            throw new IllegalArgumentException("Todo with id "+ id);
        }
        repository.deleteById(id);
    }

}
