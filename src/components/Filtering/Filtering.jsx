
// Listo
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
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


import { makeStyles } from '@material-ui/core/styles';
import { theme } from '../../styles';
import { styles } from './styles';
// import { goHome } from '../../store/actions';


const useStyles = makeStyles(styles);

export default function Filtering(props) {

    const { filterAdverts, login, register, isFetching, error, goApp, goHome, showLogin, goLogin, showRegister, showUserRegistered, location } = props;
    const [t, i18n] = useTranslation();
    const style = useStyles();

    // if (!showLogin && !showRegister && !showUserRegistered) {
    //     goLogin();
    // }

    // const initialState = showLogin ? { username: "pablesite", password: "1234" } : { username: "", password: "" };

    const onSubmit = (event) => {

        const { name, price, tags } = event;
        let filterString = '';
        let temp = true;

        if (name) {
            filterString = 'name=' + name;
        }
        if (price) {
            if (filterString === '') {
                filterString = 'price=' + price;
            } else {
                filterString = filterString + '&price=' + price;
            }
        }
        if (tags) {
            if (filterString === '') {
                filterString = 'tag=' + tags;
            } else {
                filterString = filterString + '&tag=' + tags;
            }
        }

        if (filterString && filterString.trim().length) {
            props.filterAdverts(filterString)
        } else {
            props.filterAdverts();

        }

    };

    return (
        <React.Fragment>

            {/* <div className={style.filteringBackground}> */}

                {isFetching && <Loading />}



                <Container component="main" className={style.filteringContainer}>
                    <ExpansionPanel className={style.expansionPanel}>
                        <ExpansionPanelSummary className={style.expansionSummary}
                            expandIcon={<ExpandMoreIcon />}
                            
                        >
                            <Typography className={style.heading}>Encuentra productos</Typography>
                        </ExpansionPanelSummary>

                        <ExpansionPanelDetails className={style.expansionDetails}>
                            <FormEnhanced

                                handleSubmit={onSubmit}
                            // initialState={initialState}
                            >
                                {/* className={style.filteringForm} */}
                                <Grid container alignItems="center" spacing={2}>

                                    <Grid item xs={3}>
                                        <InputEnhanced
                                            type='text'
                                            name='name'
                                            component={TextField}
                                            selectValues={null}
                                            fullWidth
                                            helperText='Name initials'
                                            className={style.test}

                                        />
                                    </Grid>

                                    <Grid item xs={3}>
                                        <InputEnhanced
                                            type='text'
                                            name='price'
                                            component={TextField}
                                            selectValues={null}
                                            fullWidth

                                            helperText='[min - max]'
                                        />
                                    </Grid>

                                    <Grid item xs={3}>
                                        <InputEnhanced
                                            type='text'
                                            name='tags'
                                            component={TextField}
                                            selectValues={null}
                                            fullWidth
                                            helperText='One free tag'


                                        />
                                    </Grid>



                                    <Grid item className={style.filteringSubmit} xs={3}>

                                        {/* <div className={style.filteringSubmit}> */}
                                        <Button
                                            label="Continue"
                                            type='submit'
                                            variant="contained"
                                            color="secondary"
                                            className={style.filteringButton}
                                        >
                                            {t('FilteringButton')}

                                        </Button>

                                        {/* </div> */}
                                    </Grid>

                                </Grid>
                                {error && <Error error={error} />}

                            </FormEnhanced>
                        </ExpansionPanelDetails>

                    </ExpansionPanel>

                </Container>

            {/* </div> */}

        </React.Fragment>

    );

}


Filtering.propTypes = {
    // error: T.instanceOf(Error),
    // isFetching: T.bool,
    // isLogin: T.bool,
    // login: T.func,
    // register: T.func,
    // goApp: T.func,
    // showLogin: T.bool,
    // showRegister: T.bool,
    // showUserRegistered: T.bool,
};
