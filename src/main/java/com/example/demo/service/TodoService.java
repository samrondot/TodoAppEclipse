package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.domain.TodoItem;
import com.example.demo.repository.TodoRepository;

@Service
public class TodoService {
	@Autowired
	private TodoRepository todoRepo;

	public List<TodoItem> findAll() {
		return todoRepo.findAll();
	}

	public void save(TodoItem todoItem) {
		todoRepo.save(todoItem);
		
	}

	public void delete(TodoItem todoItem) {
		todoRepo.delete(todoItem);
		
	}

	public List<TodoItem> findByIsDone(boolean b) {
		return todoRepo.findByIsDone(false);
	}

}
