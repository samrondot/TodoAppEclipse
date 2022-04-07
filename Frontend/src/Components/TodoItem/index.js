import React from 'react';
import { handleTodoItemUpdate, handleTodoItemDelete } from '../Services/todoItemsService';
const TodoItem = (props) => {
    //const todoItem = props.todoItemData
    const { todoItemData, todoItems, setTodoItems } = props



    return (
        <div>
          <>
            <input
              type="checkbox"
              onChange={(e) => {
                todoItemData.isDone = !todoItemData.isDone;
                handleTodoItemUpdate(
                  todoItemData,
                  todoItems,
                  setTodoItems,
                  true
                );
              }}
              checked={todoItemData.isDone}
            />
            {todoItemData.isDone ? (
              <label
                style={
                  todoItemData.isDone ? { textDecoration: "line-through" } : {}
                }
              >
                {todoItemData.itemName}
              </label>
            ) : (
              <input
                type="text"
                value={todoItemData.itemName}
                placeholder="New todo item here"
                onChange={(e) => {
                  todoItemData.itemName = e.target.value;
                  handleTodoItemUpdate(
                    todoItemData,
                    todoItems,
                    setTodoItems,
                    false
                  );
                }}
                onBlur={(e) => {
                  todoItemData.itemName = e.target.value;
                  handleTodoItemUpdate(
                    todoItemData,
                    todoItems,
                    setTodoItems,
                    true
                  );
                }}
              />
            )}
            <span
              style={{ marginLeft: "1em", cursor: "pointer" }}
              onClick={(e) => handleTodoItemDelete(todoItemData, setTodoItems)}
            >
              ➖
            </span>
          </>
        </div>
      );
    };

export default TodoItem;