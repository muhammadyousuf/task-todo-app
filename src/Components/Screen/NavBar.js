import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';



const styles = {
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -18,
      marginRight: 10,
    },
  };

class NavBar extends Component {
    
    render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar variant="dense">
                    
                        <Typography variant="h6" color="inherit">
                            TODO APPLICATION
          </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}
NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(NavBar);