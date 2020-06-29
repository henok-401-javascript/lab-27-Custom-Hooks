import React, { useState, useEffect } from 'react';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';
import { Container } from 'react-bootstrap';

function ToDo(){
let [Tasks , setTasks] = useState([]);

  function addTask(taskDetails){
  setTasks([...Tasks,taskDetails]) 
  }

  function modifiedTask(Index , updatedTask){
    let currentTask = [...Tasks];
    currentTask[Index] = updatedTask;
    setTasks(currentTask);
  }


  useEffect(() =>{
    let Incomplete = 0;
    for(let i = 0; i < Tasks.length; i++){
       if(Tasks[i].status === ' Incomplete'){
        Incomplete++;
       }if(Incomplete === 1){
         document.title = '1 Incomplete tasks!';
       }if(Incomplete){
         document.title = Incomplete + ' Incomplete tasks!';
       }else{
         document.title = 'All tasks completed!!';
       }
       

    }
  } ,[Tasks]);

  return(
    <>
    <Container>
     <ToDoForm addTask={addTask}/>
     <ToDoList Tasks={Tasks} modifiedTask={modifiedTask}/>
    </Container>
    </>
  )
}
export default ToDo;