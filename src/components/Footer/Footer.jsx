

import React from 'react';

import Copyright from '../Copyright';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';
import { styles } from './styles';


const useStyles = makeStyles(styles);


export default function Footer(props) {

    const style = useStyles();

    return (
        <React.Fragment>

            <div className={style.footerRoot}>
                <AppBar position="static">
                    <Toolbar className={style.footerToolbar}>

                        <Grid container
                            direction="row"
                            justify="space-between"
                            alignItems="center" >

                            <Grid item xs >
                                <Copyright color='inherit'/>
                            </Grid>
                        </Grid>

                    </Toolbar>
                </AppBar>

            </div>

        </React.Fragment >
    );

}

