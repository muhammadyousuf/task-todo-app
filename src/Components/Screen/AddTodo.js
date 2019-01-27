import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Paper, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button'; 
import {textBoxStyle,paperStyle, buttonStyle} from '../Style/style';
import * as firebase from 'firebase';

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
    constructor(props) {
        super(props);
        this.state = {
            todo: ''
        }
    }
    render() {
        return (
            <div>
                <Paper style={paperStyle} elevation={20} rounded="true" >
                    <TextField
                        id="standard-dense"
                        label="Add Todo"
                        style={textBoxStyle}
                        value={this.state.todo}
                        onChange={(event) => this.setState({ todo: event.target.value })}
                    />
                    <Button variant="contained" color="primary" style={buttonStyle}  >
                        ADD TODO
                    </Button>
                </Paper>

            </div>
        );
    }
}
AddTodo.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddTodo);


