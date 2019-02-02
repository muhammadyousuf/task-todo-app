import React, { Component } from 'react';
import AddTodo from './AddTodo';
import NavBar from './NavBar';
import TodoList from './TodoList';


export default class Main extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <AddTodo />
                <TodoList />
            </div>
        );
    }
}
