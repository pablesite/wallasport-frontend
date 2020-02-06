
// Listo
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import T from 'prop-types';
import { Link } from 'react-router-dom'

import FormEnhanced from '../FormEnhanced'
import InputEnhanced from '../InputEnhanced'
import Home from '../Home';

import Loading from '../Loading';
import Error from '../Error';
import Copyright from '../Copyright';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { TextField } from '@material-ui/core';
import { useStyles } from '../../styles';


import SvgIcon from '@material-ui/core/SvgIcon';

function HomeIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
}


export default function Login(props) {

    const { login, register, isFetching, error, goApp, showLogin, showRegister } = props;

    const [t, i18n] = useTranslation();
    const style = useStyles();
    const classes = useStyles();


    const initialState = showLogin ? { username: "pablesite", password: "1234" } : { username: "", password: "" };


    const onSubmit = (user) => {
        if (showLogin) {
            login(user);
        } else {
            register(user);
        }

    };


    return (
        <React.Fragment>

            <div className={style.loginBackground}>

                {isFetching && <Loading />}

                <Container component="main" maxWidth="xs" className={style.loginContainer}>

                    <div className={style.loginForm}>

                        <div className={style.homeIcon}>
                            <HomeIcon onClick={() => goApp()} fontSize="large" />
                        </div>

                        <Avatar className={style.loginAvatar}>
                            <LockOutlinedIcon />
                        </Avatar>
                       
                        <Typography component="h1" variant="h6">
                            {showLogin && t('Welcome')}
                            {showRegister && t('Register')}

                        </Typography>
                        <Typography variant="body2">
                            {showRegister && t('Register_data')}

                        </Typography>


                        <p></p>
                        <FormEnhanced
                            handleSubmit={onSubmit}
                            initialState={initialState}
                        >
                            <Grid container spacing={2}>

                                <Grid item xs={12}>
                                    <InputEnhanced
                                        type='text'
                                        name='username'
                                        component={TextField}
                                        fullWidth
                                        variant="outlined"
                                        required />
                                </Grid>


                                {showRegister &&
                                    <Grid item xs={12}>
                                        <InputEnhanced
                                            type='email'
                                            name='email'
                                            component={TextField}
                                            fullWidth
                                            variant="outlined"
                                            required />
                                    </Grid>
                                }

                                <Grid item xs={12}>
                                    <InputEnhanced
                                        type='password'
                                        name='password'
                                        component={TextField}
                                        fullWidth
                                        variant="outlined"
                                        required />
                                </Grid>

                            </Grid>

                            <div className={style.loginSubmit}>
                                <Button
                                    label="Continue"
                                    type='submit'
                                    variant="contained"
                                    color="primary"
                                >
                                    {showLogin && t('LoginButton')}
                                    {showRegister && t('RegisterButton')}
                                </Button>
                            </div>

                            {error && <Error error={error} />}

                        </FormEnhanced>

                        <Copyright />

                    </div>

                </Container>
            </div>


        </React.Fragment>

    );

}


Login.propTypes = {
    error: T.instanceOf(Error),
    isFetching: T.bool,
    isLogin: T.bool,
    login: T.func,
    register: T.func,
    goApp: T.func,
    showLogin: T.bool,
    showRegister: T.bool,
};
