import React from 'react';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';
import { Container } from 'react-bootstrap';

import useFetch from '../hooks/useFetch';



function ToDo(){
const {setRequest , response} = useFetch({
  url: 'https://todo-server-401n16.herokuapp.com/api/v1/todo',
});

  async function addTask(taskDetails){
   await setRequest({
     url:'https://todo-server-401n16.herokuapp.com/api/v1/todo' ,
     method:'POST',
     response:taskDetails,
   }) 
  }

 async function modifiedTask(Index , updatedTask){
  await  setRequest({
      url:'https://todo-server-401n16.herokuapp.com/api/v1/todo' + response[Index]._id,
      method:'PUT',
      body:updatedTask,
      
    })
  }
async function deletedTask(Index){
  await setRequest({
    url:'https://todo-server-401n16.herokuapp.com/api/v1/todo'+ response[Index]._id,
    method:'DELETE',
  
  });
}

  return(
    <>
    <Container>
     <ToDoForm addTask={addTask}/>
     <ToDoList 
     Tasks={response}
      modifiedTask={modifiedTask}
      deletedTask={deletedTask}
      />
    </Container>
    </>
  )
}

export default ToDo;




 // useEffect(() =>{
  //   let Incomplete = 0;
  //   for(let i = 0; i < Tasks.length; i++){
  //      if(Tasks[i].status === ' Incomplete'){
  //       Incomplete++;
  //      }if(Incomplete === 1){
  //        document.title = '1 Incomplete tasks!';
  //      }if(Incomplete){
  //        document.title = Incomplete + ' Incomplete tasks!';
  //      }else{
  //        document.title = 'All tasks completed!!';
  //      }
  
  //   }
  // } ,[]);