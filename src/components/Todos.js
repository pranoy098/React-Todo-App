import React,{ Component } from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo';

const Todos = ({todos,setTodos}) => {
      return (
        <div className="child">
          <table className="table">
            <thead>
              <tr>
                <td></td>
                <td>What to do next</td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              {todos.map((todo, index) => (
                <tr key={todo.id}>
                  <Todo index={index + 1} todo={todo} todoslist={todos} setTodos={setTodos}/>
                </tr>
              ))}
              <tr>
                <td colSpan="3">
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }

  
 export default Todos; 