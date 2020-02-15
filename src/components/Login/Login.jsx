import React from 'react';
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
        isFetching, error,                              //ui
        showLogin, showRegister, showUserRegistered,    //appSelectors
    } = props;

    // Actions of the store
    const { login, register, goToHome, goLogin } = props;

    const initialState = showLogin ? { username: "pablesite", password: "1234" } : { username: "", password: "" };

    const onSubmit = (user) => {
        if (showLogin) { login(user) }
        else { register(user) }
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
                                onClick={() => goLogin()}>
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


                                    {showRegister && !showUserRegistered &&
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

                            </FormEnhanced>}

                        <Copyright />

                    </div>

                </Container>
            </div>

        </React.Fragment>

    );

}

Login.propTypes = {
    isFetching: T.bool,
    error: T.objectOf(Error),
    showLogin: T.bool,
    showRegister: T.bool,
    showUserRegistered: T.bool,
    login: T.func,
    register: T.func,
    goToHome: T.func,
    goLogin: T.func,
};

