import React, { Component } from 'react';
import Connect from '../Function/api';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { TableHeader } from '../Style/style';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
});
class TodoList extends Component {
    constructor(props) {
        super();
        this.state = {
            TodoList: []
        }
    }
    componentDidMount() {

        let {pageRefProp} = this.props

        let record = {}
        let TodoData = []
        Connect(record, "get", "/")
            .then(res => res.json())
            .then((json) =>{
                console.log(json)
                for (var key in json) {
                    TodoData.push({
                        id: json[key].id,
                        title: json[key].title,
                        order: json[key].order,
                        completed: json[key].completed === true ? "Completed" : "Not COmpleted",
                    })
                    
                }
                
                pageRefProp.setState({TodoList:TodoData})
            
            })
            .catch((err) => console.log('err', err))
    }

    
    render() {
        const { classes } = this.props;
        let {pageRefProp} = this.props
        return (
            <div>
                <Paper className={classes.root}>
                    <Table className={classes.table}>
                        <TableHead  >
                            <TableRow style={{ backgroundColor: "#2143b7" }} >
                                <TableCell style={TableHeader} >ID</TableCell>
                                <TableCell style={TableHeader} >Title</TableCell>
                                <TableCell style={TableHeader} >Order</TableCell>
                                <TableCell style={TableHeader} >Completed</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                               {
                                   pageRefProp.state.TodoList.map((data, index) =>{
                                       return(
                                        <TableRow key={index}>
                                        <TableCell component="th" scope="row">
                                          {data.id}
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                          {data.title}
                                        </TableCell><TableCell component="th" scope="row">
                                          {data.order}
                                        </TableCell><TableCell component="th" scope="row">
                                          {data.completed}
                                        </TableCell>
                                        </TableRow>
                                       )
                                   })
                               }
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        )
    }

}


TodoList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TodoList);
