package com.example.demo.web;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.domain.TodoItem;
import com.example.demo.service.TodoService;

@RestController
@RequestMapping("api/todoItems")
public class TodoController {
	
	@Autowired
	private TodoService todoService;
	
	@GetMapping
	public ResponseEntity<List<TodoItem>> getAllTodoItems(){
		List<TodoItem> allTodoItems = todoService.findAll();
		System.out.println("Hello");
		return ResponseEntity.ok(allTodoItems);
	}
	@GetMapping("/active")
	public ResponseEntity<List<TodoItem>>getActiveTodoItems(){
		List<TodoItem> allActiveTodoItems = todoService.findByIsDone(false);
		System.out.println("Hello");
		return ResponseEntity.ok(allActiveTodoItems);
	}
	
	@PostMapping
	public ResponseEntity<List<TodoItem>>addNewItem(@RequestBody TodoItem todoItem){
			todoService.save(todoItem);
		return getAllTodoItems();
		
	}
	@PutMapping
	public ResponseEntity<List<TodoItem>>updateTodoItem(@RequestBody TodoItem todoItem){
		todoService.save(todoItem);
		return getAllTodoItems();
	}
	@DeleteMapping
	public ResponseEntity<List<TodoItem>>deleteTodoItem(@RequestBody TodoItem todoItem){
		todoService.delete(todoItem);
		return getAllTodoItems();
	}
	
	
	
	
	

}
