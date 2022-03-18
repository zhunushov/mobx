import { Input } from 'antd';
import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import todo from '../store/todo';

const EditTodo = observer(() => {
     const navigate = useNavigate()
     const { id } = useParams()
     const [values,  setValue ] = useState({title: ''})

    useEffect(() => {
       if (id){
        todo.editTodos(id)
        }
    },[id])

    useEffect(() => {
        if(todo.edit){
           setValue(todo.edit)
        }
    }, [todo.edit])

    const  handleSummit  = (event) => {
        event.preventDefault();
        if(values.title.trim()){
          todo.saveEdited(todo.edit.id, values)
          setValue({title: ""})
          navigate("/")
        }
    }
    
    return (
        <div>
            <Input type="text" value={values.title} onChange={(e) => setValue({ ...values, title: e.target.value })} name="title" id='inp'/>
            <button onClick={handleSummit} className="btn1">Edit Todo</button>
        </div>
    );
});

export default EditTodo;