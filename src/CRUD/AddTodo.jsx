import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom'
import todo from '../store/todo';

const AddTodo = observer(() => {
    const navigate = useNavigate()
    const [values,  setValue ] = useState({title: ''})
    
    const  handleSummit  = (event) => {
      event.preventDefault();
        if(values.title.trim()){
          todo.addTodo(values)
          setValue({title: ""})
          navigate('/')
        }
    }
    
    return (
        <div>
          <input 
          type="text" 
          value={values.title} 
          onChange={(e) => 
          setValue({ ...values, title: e.target.value })} 
          name="title" id='inp'/>
          <button 
          onClick={handleSummit} 
          className="btn1">Add Todo</button>
        </div>
    );
});

export default AddTodo;