import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import T from 'prop-types';

import FormEnhanced from '../FormEnhanced'
import InputEnhanced from '../InputEnhanced'
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
import { mdiArrowLeftThick } from '@mdi/js';
import Icon from '@mdi/react';

import { makeStyles } from '@material-ui/core/styles';
import { theme } from '../styles';
import { styles } from './styles';


const useStyles = makeStyles(styles);


export default function Login(props) {

    const [t] = useTranslation();
    const style = useStyles();

    // State of store
    const {
        token, username, email,                                         //user
        isFetching, error,                                              //ui
        showLogin, showRegister, showUpdateUser, showUserRegistered,    //appSelectors
    } = props;

    // Actions of the store
    const { login, register, updateUser, goToHome, showLoginAction } = props;

    let initialState = showUpdateUser ? { username: username, email: email } : { username: "", email: "", password: "" };

    useEffect(() => {
        if (!showLogin && !showRegister && !showUpdateUser && !showUserRegistered) {
            showLoginAction();
        }

    }, [showLoginAction, showRegister, showUpdateUser, showUserRegistered, showLogin]);

    const [photo, setPhoto] = useState();


    const onSubmit = (user) => {

        if (showLogin) { login(user); goToHome(); }
        else {
            if (photo) { user = { ...user, photo: photo } }

            if (showRegister) {
                register(user)
            } else {
                updateUser(user, username, token)
            }
        }
    };

    return (
        <React.Fragment>

            <div className={style.loginBackground}>

                {isFetching && <Loading />}

                <Container component="main" maxWidth="xs" className={style.loginContainer}>

                    <div className={style.loginForm}>

                        <div className={style.loginArrow}>

                            <Icon
                                onClick={() => goToHome()}
                                path={mdiArrowLeftThick}
                                size={1}
                                horizontal
                                rotate={180}
                                color={theme.palette.primary.main}
                            />

                        </div>

                        {!showUserRegistered &&
                            <Avatar className={style.loginAvatar}>
                                <LockOutlinedIcon />
                            </Avatar>}

                        <Typography component="h1" variant="h6">
                            {showLogin && t('Welcome')}
                            {showRegister && t('Register')}
                            {showUpdateUser && t('UpdateUser')}
                        </Typography>

                        <Typography variant="body2">
                            {showRegister && t('Register_data')}

                        </Typography>

                        <Typography component="h1" variant="h6">
                            {showUserRegistered && t('UserRegistered')}
                        </Typography>

                        <p></p>

                        {showUserRegistered &&
                            <Button
                                className={style.loginButton}
                                size="small"
                                variant="outlined"
                                color="primary"
                                onClick={() => showLoginAction()}>
                                {t('LoginButton')}
                            </Button>}
                        {showUserRegistered && <p></p>}

                        {!showUserRegistered &&
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


                                    {(showRegister || showUpdateUser) && !showUserRegistered &&
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
                                            required
                                            helperText={showUpdateUser && t('NewPassword')}

                                        />
                                    </Grid>

                                    {(showRegister || showUpdateUser) && !showUserRegistered &&

                                        <Grid item xs={12}>
                                            <input
                                                accept="image/*"
                                                style={{ display: 'none' }}
                                                id="raised-button-file"
                                                multiple
                                                type="file"
                                                onChange={(e) => setPhoto(e.target.files[0])}
                                            />

                                            <label htmlFor="raised-button-file">
                                                <Button
                                                    className={style.createOrUpdateButtonUpload}
                                                    component="span"
                                                    fullWidth
                                                    variant="outlined"
                                                    color="primary"
                                                    size="medium"
                                                >
                                                    {t('UploadImage')}
                                                </Button>
                                            </label>

                                        </Grid>
                                    }

                                </Grid>

                                <Typography className={style.createOrUpdateCreateTypography} variant="body2" color="inherit" >
                                    {photo !== undefined && photo !== null && t('NameOfPhoto') + photo.name}
                                </Typography>


                                <div className={style.loginSubmit}>
                                    <Button
                                        label="Continue"
                                        type='submit'
                                        variant="contained"
                                        color="primary"
                                    >
                                        {showLogin && t('LoginButton')}
                                        {showRegister && t('RegisterButton')}
                                        {showUpdateUser && t('UpdateUserButton')}

                                    </Button>
                                </div>

                                {error && <Error error={error} />}

                            </FormEnhanced>}

                        <Copyright />

                    </div>

                </Container>
            </div>

        </React.Fragment>

    );

}

Login.propTypes = {
    token: T.string,
    username: T.string,
    email: T.string,
    isFetching: T.bool,
    error: T.objectOf(Error),
    showLogin: T.bool,
    showRegister: T.bool,
    showUpdateUser: T.bool,
    showUserRegistered: T.bool,
    login: T.func,
    register: T.func,
    updateUser: T.func,
    goToHome: T.func,
    showLoginAction: T.func,
};

