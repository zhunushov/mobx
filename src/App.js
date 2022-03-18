import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddTodo from './CRUD/AddTodo';
import EditTodo from './CRUD/EditTodo';
import Todo from './CRUD/Todo';
import Navbar from './Header/Navbar';
import 'antd/dist/antd.css';



const App = () => {
    return (
        <BrowserRouter>
          <Navbar />
            <Routes>
                <Route path='/' element={ <Todo />}/>
                <Route path='/add' element={<AddTodo />}/>
                <Route path='/edit/:id' element={<EditTodo />}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;