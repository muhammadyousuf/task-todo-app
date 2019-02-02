import React, { Component } from 'react';
import AddTodo from './AddTodo';
import NavBar from './NavBar';
import TodoList from './TodoList';


export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            order: '',
            completed: false,
            TodoList :[]
        }
    }

    render() {
        return (
            <div>
                <NavBar />
                <AddTodo pageRefProp = {this}/>
                <TodoList pageRefProp = {this}/>
            </div>
        );
    }
}
