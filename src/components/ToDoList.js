import React from 'react';
import ToDoItem from './ToDoItem';


function ToDoList(props){

let item = [];
if(props.Tasks)
  for(let i = 0; i < props.Tasks.length;i++){
item.push(<ToDoItem 
key={i}
Index={i}
data={props.Tasks[i]}
deletedTask={props.deletedTask}
modifiedTask={props.modifiedTask}
/>)
  }

  return(
    <>
   <h1>Tasks To Complete</h1>
   {item}
    </>
  ) 
}
export default ToDoList;