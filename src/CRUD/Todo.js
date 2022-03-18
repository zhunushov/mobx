import { observer } from 'mobx-react-lite';
import React, { useEffect,  useMemo,  useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import todo from '../store/todo';
import {  Button } from 'antd';
import Search from 'antd/lib/transfer/search';


const Todo = observer(() => {
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()
    const [searchVal, setSearchVal] = useState(searchParams.get('q')  || "")

    useEffect(() => {
        todo.fetchTodos()
    }, [])

    useMemo(() => {
        setSearchParams({q: searchVal})
        todo.fetchTodos()
    },[searchVal])

    const handleSearch = (e) => {
        setSearchVal(e.target.value)
        todo.fetchTodos()
    }

    return (
        <div>
            <Button 
             onClick={() => 
            navigate('/add')} >Add</Button>
            <Search 
            placeholder="input search text" 
            onChange={e => handleSearch(e)} 
            value={searchVal}/>
              {todo.todos.map(item => 
               <div className='todo' key={item.id}> 
                <h1>{item.title}</h1>
                <div >
                <button className='item' onClick={(() => todo.removeTodo(item.id))}>Delete</button>
                <Link to={`edit/${item.id}`}> 
                <button className='item' onClick={() => todo.editTodos(item.id)}>Edit</button>
                </Link>
                </div>
               </div>
             )} 
        </div>
    );
});

export default Todo;