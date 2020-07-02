import React from 'react';
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import useForm from '../hooks/useForm';

function ToDoForm(props){
const [updateForm , submitHandler , data] = useForm(props.addTask);
console.log('status data',data);
//   const [description , setDescription] = useState(props.description || '');
//   const [assigned , setAssigned] = useState(props.assigned || '');
//   const [status , setStatus] = useState(props.status || ' Incomplete');
//   const [difficulty , setDifficulty] = useState(props.difficulty || 1);
// console.log(description,assigned,status,difficulty);
// function submitHandler(){
// props.addTask({
//   description,
//   assigned,
//   status,
//   difficulty
// });
// }


return(
  <div>
      <Form>

<Form.Group controlId="ToDo-description">
  <Form.Label>Task Description</Form.Label>

  <Form.Control 
  type="text" 
  rows='3'
  onChange={(e) =>{
    updateForm('description' , e.target.value);
  }}
  />

</Form.Group>


<Form.Group controlId="ToDo-assigned">
  <Form.Label>Assigned To</Form.Label>
  <Form.Control 
  type="text" 
  onChange={(e) =>{
    updateForm('assigned',e.target.value);
  }}
  
  />
</Form.Group>

<Form.Group controlId="ToDo-status">
<Form.Label> Status</Form.Label>
  <Form.Check 
  onChange={(e) =>{
    updateForm('status' , e.target.checked);
  }}
  type="switch" 
  id='status -switch'
  label={data.status ? 'complete' : 'Incomplete'} 
  
  />
</Form.Group>


<Form.Group controlId="formBasicRange">
  <Form.Label>Difficulty</Form.Label>
  <Form.Control 
  type="range"
  step={1}
  min={0}
  max={5}
  onChange={(e) =>{
    updateForm('difficulty' , e.target.value);
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