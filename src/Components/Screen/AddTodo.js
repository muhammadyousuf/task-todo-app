import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Paper, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button'; 
import {textBoxStyle,paperStyle, buttonStyle} from '../Style/style';
import {addFunc} from '../Function/add';

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
            title: '',
            order:null,
            completed:false
        }
    }
    render() {
        return (
            <div>
                <Paper style={paperStyle} elevation={20} rounded="true" >
                    <TextField
                        label="Title"
                        style={textBoxStyle}
                        value={this.state.title}
                        onChange={(event) => this.setState({ title: event.target.value })}
                    />
                     <TextField
                        label="Order"
                        type="number"
                        style={textBoxStyle}
                        value={this.state.order}
                        onChange={(event) => this.setState({ order: event.target.value })}
                    />
                    <Button variant="contained" color="primary" style={buttonStyle} onClick={() => addFunc(this,()=>{
                       
                       this.setState({todo:''})
                    })} >
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


