import React, { Component } from 'react';
import Connect from '../Function/api';


class TodoList extends Component {
    constructor(props) {
        super();
        this.state = {
            TodoList: []
        }
    }
    componentDidMount() {
        let record = {}
        Connect(record, "get", "/")
            .then(res => res.json())
            .then((json) => console.log(json))
            .catch((err) => console.log('err', err))
    }
    render() {
        return (
            <div>

            </div>
        )
    }

}
export default TodoList