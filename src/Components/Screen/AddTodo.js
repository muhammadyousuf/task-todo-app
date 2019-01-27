import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {  TextField } from '@material-ui/core';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
});





class AddTodo extends Component {
    constructor(props){
        super(props);
        this.state = {
            todo:''
        }
    }
    render() {
        return (
            <div>
                <TextField
                        id="standard-dense"
                        label="Add Todo"
                        style={{ marginTop: '6%', width: '45%' }}
                        value = {this.state.todo}
                        onChange={ (event) =>  this.setState({todo:event.target.value}) }
                    />

            </div>
        );
    }
}
AddTodo.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddTodo);


