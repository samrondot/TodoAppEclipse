import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TodoItem from '../TodoItem';

const Dashboard = () => {
    const [allActiveItems, setAllActiveItems] = useState([])
    useEffect(()=>{
        fetch("/api/todoItems/active",{
            method: "GET",
            headers: {
                "content-type" : "application/json",
            },
        }).then((response)=> response.json())
            .then(allActiveItems => {
               setAllActiveItems(allActiveItems);
        });
    }, [])

    
    return (
        <>
        {allActiveItems
        .filter(item => !item.isDone)
        .map((data) => {
          return (
            <TodoItem
              todoItemData={data}
              key={data.id}
              todoItems = {allActiveItems}
              setTodoItems = {setAllActiveItems}
            
            />
          );
        })}
        <div>
            Active Todo Items
        </div>
        <div>
            <Link to= "/">Home</Link>
        </div>
        </>
    );
};

export default Dashboard;