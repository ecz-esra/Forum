import React,{useState} from 'react'
import AddPostView from './AddPostView'
import AddPostModel from './AddPostModel';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddPostController = () => {
    const navigate=useNavigate();
   const model= new AddPostModel();
   
   const [form,setForm]=useState(model.state)

   // inputlarin onChange larini ele alma
    const onInputChange=(label,value)=>{
      var newInputState={...form};
      newInputState[label]=value;
      setForm(newInputState);
    }
    //form onaylandiginda 
    const handleSubmit=(e)=>{
        e.preventDefault();
        //yalnizca harfler
        var letters = /^[A-Za-z]+$/;
        if(!form.title || !form.user || !form.text) {
            alert("fill out the form");
            return;
        }else if(!form.title.match(letters)){
            alert("Title can't be contain numbers ")
            return;
        }
        // verileri gonderme
      axios.post("http://localhost:3030/post", form)
      .then((res)=>navigate("/"))
    }
  return (
   <AddPostView onInputChange={onInputChange} handleSubmit={handleSubmit}/>
  )
}

export default AddPostController
