import React,{useState} from 'react';
const Todo = ({todo,setTodos,todoslist}) =>{

    const [checkval,setCheckVal] = useState(todo.completed)
   
    const renderTodo = ()=> {
        if (todo.completed)
          return <s>{todo.description}</s>;
        else
          return todo.description;
    }

    const deleteHandler = () =>{
        setTodos(todoslist.filter((val)=> val.id !== todo.id))
    }

    const completeHandler = (e) =>{
        setCheckVal(!checkval)
        setTodos(todoslist.map((item)=>{
            if(item.id === todo.id){
                return{
                    ...item,
                    completed: !item.completed
                }
            }
            return item
        })
        )
    }

      return (
        <React.Fragment >
          <td style={{ width: 15 }}>
            <input type="checkbox" checked={checkval} onChange={completeHandler}/>
          </td>
          <td>
            {
              renderTodo()
            }
          </td>
          <td style={{ width: 100 }}>
            <button onClick={deleteHandler}>Delete</button>
          </td>
        </React.Fragment>
      );
}

  export default Todo
