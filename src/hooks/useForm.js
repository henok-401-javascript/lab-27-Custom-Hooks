import {useState} from 'react';


function useForm(callBack , ToDoData){
const [formData , setFormData] = useState(ToDoData || {});
console.log(formData );
function updateData(key , value){
  let newFormData = {...formData};
  newFormData[key]  = value;
  setFormData(newFormData);
}
function submitHandler(e){
e.preventDefault();
callBack(formData);

}
return [updateData , submitHandler , formData];
}
export default useForm;