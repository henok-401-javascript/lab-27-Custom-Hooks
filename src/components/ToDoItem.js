import React from 'react';
import {Form} from 'react-bootstrap';

function ToDoItem(props){
  
  return(
    <div>

    <p>{props.data.description}</p>
    <p>{props.data.assigned}</p>
    <p>{props.data.difficulty}</p>
    
    <Form.Group controlId={"ToDo-status" + props.Index}>
  <Form.Label> Status</Form.Label>
    <Form.Check 
 
    value={props.data.status}
     onChange={() =>{
       let newTask = {...props.data};
       newTask.status = newTask.status === !newTask.status;
    props.modifiedTask(props.Index , newTask);
     }}
    type="switch" 
    id={'status -switch' + props.Index} 
    label={props.data.status} 
    
    />
  </Form.Group>
 
  </div>
)

}

export default ToDoItem;