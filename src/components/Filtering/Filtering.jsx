
import React from 'react';
import { useTranslation } from 'react-i18next';
import T from 'prop-types';

import FormEnhanced from '../FormEnhanced'
import InputEnhanced from '../InputEnhanced'

import Error from '../Error';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { TextField, Select } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { makeStyles } from '@material-ui/core/styles';
import { styles } from './styles';


const useStyles = makeStyles(styles);


export default function Filtering(props) {

    const [t] = useTranslation();
    const style = useStyles();

    // State of store
    const {
        sort,               //adverts  
        tagList,            //tags   
    } = props;

    // Actions of the store
    const { filterAdverts, switchSort } = props;

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

            <Container component="main" className={style.filteringContainer}>
                <ExpansionPanel className={style.filteringExpansionPanel}>
                    <ExpansionPanelSummary className={style.filteringExpansionSummary}
                        expandIcon={<ExpandMoreIcon />}>
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

                                <Grid item xs={2}>
                                    <FormControl fullWidth >
                                        <InputEnhanced
                                            type='text'
                                            name='tags'
                                            selectvalues={tagList}
                                            component={Select}
                                            fullWidth
                                            />
                                   
                                    <FormHelperText>{t('OneFreeTag')}</FormHelperText>
                                    </FormControl>
                                </Grid>


                                <Grid item xs={4}>

                                    <Grid item className={style.filteringSubmit} xs>

                                        <FormControlLabel
                                            classes={{ root: style.filteringSwitch, label: style.filteringSwitchText }}
                                            control={
                                                <Switch
                                                    checked={sort}
                                                    onChange={() => switchSort(sort)}
                                                    value={sort}
                                                    color="secondary"
                                                />}
                                            label={sort ? t('Descendent') : t('Ascendent')}
                                        />
                                    </Grid>

                                    <Grid item className={style.filteringSubmit} xs>
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

                            </Grid>

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
