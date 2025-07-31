import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container, Navbar, NavbarBrand, Table } from 'react-bootstrap';
import styles from "./App.module.css"
import Todo from './components/Todo';

function App() {
  return (
    <div className='bg-light vh-100 d-flex justify-content-center align-items-center'>
        <Todo></Todo>
    </div>
  );
}

export default App;
