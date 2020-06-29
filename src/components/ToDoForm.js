import React, { useState } from 'react';
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

function ToDoForm(props){

  const [description , setDescription] = useState(props.description || '');
  const [assigned , setAssigned] = useState(props.assigned || '');
  const [status , setStatus] = useState(props.status || ' Incomplete');
  const [difficulty , setDifficulty] = useState(props.difficulty || 1);
console.log(description,assigned,status,difficulty);
function submitHandler(){
props.addTask({
  description,
  assigned,
  status,
  difficulty
});
}


return(
  <div>
      <Form>

<Form.Group controlId="ToDo-description">
  <Form.Label>Task Description</Form.Label>

  <Form.Control 
  type="text" 
  value={description}
  onChange={(e) =>{
    setDescription(e.target.value);
  }}
  />

</Form.Group>


<Form.Group controlId="ToDo-assigned">
  <Form.Label>Assigned To</Form.Label>
  <Form.Control 
  type="text" 
  value={assigned}
  onChange={(e) =>{
    setAssigned(e.target.value);
  }}
  
  />
</Form.Group>

<Form.Group controlId="ToDo-status">
<Form.Label> Status</Form.Label>
  <Form.Check 

  value={status === 'Complete'}
  onChange={() =>{
    setStatus(status === 'Complete' ? 'Incomplete' : 'Complete' ,);
  }}
  type="switch" 
  id='status -switch'
  label={status} 
  
  />
</Form.Group>


<Form.Group controlId="formBasicRange">
  <Form.Label>Difficulty</Form.Label>
  <Form.Control 
  type="range"
  step={1}
  min={0}
  max={5}
  value={difficulty}
  onChange={(e) =>{
    setDifficulty(e.target.value);
  }}
  
  />
</Form.Group>

<Button variant="primary" type="button"  onClick={submitHandler}>
  Submit
</Button>

</Form>


  </div>
)

}

export default ToDoForm;