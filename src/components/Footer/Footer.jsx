

import React from 'react';
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import T from 'prop-types';

import Button from '@material-ui/core/Button';
import Copyright from '../Copyright';


import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import { mdiMagnify } from '@mdi/js';
import SvgIcon from '@material-ui/core/SvgIcon';
import Icon from '@mdi/react';


import { makeStyles } from '@material-ui/core/styles';
import { theme } from '../../styles';
import { styles } from './styles';

const useStyles = makeStyles(styles);


export default function Footer(props) {
    // const { user, logout, goLogin, goRegister } = props;

    const [t, i18n] = useTranslation();
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

// Footer.propTypes = {
//     user: T.object,
//     logout: T.func,
//     goLogin: T.func,
//     goRegister: T.func,

// };
