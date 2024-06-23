import { useRef, useState } from "react";
import "./Todo.css"
type Todo={
    id:number;
    desc:string; 
}

const TodoApp: React.FC=()=>{
    let newtask=useRef<HTMLInputElement|any>(null)
 let[todos,settodo]= useState<Todo[]>(
     [
        {id:1,desc:"Learn Html"},
        {id:2,desc:"Learn CSS"},
     
    ])
    let deleteToDo=(id:number)=>{
       settodo(todos.filter((todo)=>todo.id!=id))
    }
    let addNewTask=()=>{
       let ids= todos.map((todo)=>todo.id)
       let newid=Math.max(...ids)+1;
       let newTodo={id:newid,desc:newtask.current?.value}
       let newarr=[...todos,newTodo]
       settodo(newarr)
       newtask.current.value=""
    }
    return(<div className="container">
    <h2>Things To DO</h2>
    <input type="text"  ref={newtask}/>&nbsp; &nbsp;
    <button onClick={addNewTask} >Add NewTask</button>
        <table>
            <tbody>
            {
                todos.map((todo,index)=><tr key={index}><td>{todo.desc}</td><td><button onClick={()=>deleteToDo(todo.id)}>Delete</button></td></tr>)
            }
            </tbody>
        </table>
    </div>)
}
export default TodoApp;