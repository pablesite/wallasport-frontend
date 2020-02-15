
import React from 'react';
import { useTranslation } from 'react-i18next';
import T from 'prop-types';

import FormEnhanced from '../FormEnhanced'
import InputEnhanced from '../InputEnhanced'

import Loading from '../Loading';
import Error from '../Error';


import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { TextField } from '@material-ui/core';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


import { makeStyles } from '@material-ui/core/styles';
// import { theme } from '../styles';
import { styles } from './styles';


const useStyles = makeStyles(styles);


export default function Filtering(props) {

    const [t] = useTranslation();
    const style = useStyles();

    // State of store
    const {
        isFetching, error    //ui
    } = props;

  // Actions of the store
  const { filterAdverts } = props;


    const onSubmit = (event) => {

        const { name, price, tags } = event;
        let filterString = '';

        if (name) {
            filterString = 'name=' + name;
        }
        if (price) {
            if (filterString === '') { filterString = 'price=' + price; }
            else { filterString = filterString + '&price=' + price; }
        }
        if (tags) {
            if (filterString === '') { filterString = 'tag=' + tags; }
            else { filterString = filterString + '&tag=' + tags; }
        }

        if (filterString && filterString.trim().length) {
            filterAdverts(filterString)
        }
        else { 
            filterAdverts(); 
        }
    };

    return (
        <React.Fragment>

            {isFetching && <Loading />}

            <Container component="main" className={style.filteringContainer}>
                <ExpansionPanel className={style.filteringExpansionPanel}>
                    <ExpansionPanelSummary className={style.filteringExpansionSummary}
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <Typography className={style.filteringHeading}>{t('FindProducts')}</Typography>
                    </ExpansionPanelSummary>

                    <ExpansionPanelDetails className={style.filteringExpansionDetails}>

                        <FormEnhanced
                            handleSubmit={onSubmit}
                        >

                            <Grid container alignItems="center" spacing={2}>

                                <Grid item xs={3}>
                                    <InputEnhanced
                                        type='text'
                                        name='name'
                                        component={TextField}
                                        fullWidth
                                        helperText={t('NameInitials')}
                                    />
                                </Grid>

                                <Grid item xs={3}>
                                    <InputEnhanced
                                        type='text'
                                        name='price'
                                        component={TextField}
                                        fullWidth

                                        helperText='[min - max] (€)'
                                    />
                                </Grid>

                                <Grid item xs={3}>
                                    <InputEnhanced
                                        type='text'
                                        name='tags'
                                        component={TextField}
                                        fullWidth
                                        helperText={t('OneFreeTag')}


                                    />
                                </Grid>

                                <Grid item className={style.filteringSubmit} xs={3}>
                                    <Button
                                        label="Continue"
                                        type='submit'
                                        variant="contained"
                                        color="secondary"
                                        className={style.filteringButton}
                                    >
                                        {t('FilteringButton')}

                                    </Button>
                                </Grid>

                            </Grid>
                            {error && <Error error={error} />}

                        </FormEnhanced>
                    </ExpansionPanelDetails>

                </ExpansionPanel>

            </Container>

        </React.Fragment>

    );

}

Filtering.propTypes = {
     error: T.objectOf(Error),
     isFetching: T.bool,
     filterAdverts: T.func,
};
