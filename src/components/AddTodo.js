import React from 'react';

const AddTodo = ({todos,setTodos,inputValue,setInputValue}) =>{
    const inputTextHandler = (e) =>{
        setInputValue(e.target.value);
    }
    const addTodoHandler = (e) =>{
      e.preventDefault();
        setTodos([
            ...todos,
            {
                id: todos.length + 1,
                description: inputValue,
                completed: false
            }
        ])
        setInputValue("");
    }
     return (
        <div className="child">
          <input type="text" id="todoDescription" placeholder="Todo description" value={inputValue} onChange={inputTextHandler} />
          <div>
            <button type="button" id="buttonAddTodo" onClick={addTodoHandler}>Add Todo</button>
          </div>
        </div>
      );
    }

  
  export default AddTodo