import React, { useEffect, useState } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import TodoItem from '../TodoItem';
import { handleTodoItemAdd, handleTodoItemDelete, handleTodoItemUpdate } from '../Services/todoItemsService';
const TodoApp = () => {
    const [todoItems, setTodoItems] = useState([])

   
   
    useEffect(()=>{
        console.log("Hello");
    fetch("api/todoItems")
        .then((response) => response.json())
        .then(data=> {setTodoItems(data);
        })
        
    },[]); 
    return(
        <>
    <Header />
    <h1>Todo Items <span onClick= {()=>handleTodoItemAdd(setTodoItems)}>+</span></h1>    
    {todoItems.map((data) => {
          return (
            <TodoItem
              todoItemData={data}
              key={data.id}
              todoItems={todoItems}
              setTodoItems={setTodoItems}
            />
          );
        })}
    <Footer />
    </>
    )  
       
    }

export default TodoApp;