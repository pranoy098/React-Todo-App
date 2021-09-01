import React,{useState,useEffect} from 'react';
import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

function App (){
   const [inputValue,setInputValue] =  useState("");
   const [completeCount,getCompleteCount] = useState("");
   const [todos,setTodos] = useState([ 
        // {
        //   id: 1,
        //   description: "Lorem ipsum dolor sit amet",
        //   completed: false
        // },
        // {
        //   id: 2,
        //   description: "consectetur adipiscing elit",
        //   completed: true
        // },
        // {
        //   id: 3,
        //   description: "tsed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        //   completed: false
        // }
      ]);

   useEffect(()=>{
    getTodoFromLocal()
   },[])   
    
   useEffect(()=>{
    let res = todos.filter((val) => val.completed === true);
    getCompleteCount(res.length)
    saveTodoinLocal()
   },[todos,completeCount])

   const saveTodoinLocal = () =>{
     localStorage.setItem("todos",JSON.stringify(todos))
   }

   const getTodoFromLocal = () =>{
     if(localStorage.getItem("todos") === null){
       localStorage.setItem(todos,JSON.stringify([]));
     }else{
       let localTodoval = JSON.parse(localStorage.getItem("todos"))
       setTodos(localTodoval)
     }  
   }
 
   return (
      <div className="container">
        <h1 className="child">React TODO App</h1>
        <Todos todos={todos}  setTodos={setTodos} />
        <AddTodo todos={todos} setTodos={setTodos} inputValue={inputValue} setInputValue={setInputValue} />
        <div className="child">
          <span>Total of items: {todos.length}</span> | <span>Completed: {completeCount}</span>
        </div>
      </div>
    );
}

export default App;
