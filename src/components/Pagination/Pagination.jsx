import React from "react";
import { useTranslation } from 'react-i18next';
import T from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { mdiArrowLeftThick } from '@mdi/js';
import Icon from '@mdi/react'

import { makeStyles } from '@material-ui/core/styles';
import { theme } from '../styles';
import { styles } from './styles';


const useStyles = makeStyles(styles);


export default function Pagination(props) {

    const [t] = useTranslation();
    const style = useStyles();

    // State of store
    const {
        actualPage, numberOfPages, //adverts
    } = props;

    // Actions of the store
    const { pageBack, pageForward } = props;


    return (
        <React.Fragment>

            <Grid container alignItems='center' alignContent='space-between' spacing={1} justify='center'>
                <Grid item sm={2}>
                    <Box textAlign="center" className={style.paginationArrow} >
                        <Icon 
                            onClick={() => pageBack(actualPage, numberOfPages)}
                            path={mdiArrowLeftThick}
                            size={1}
                            horizontal
                            rotate={180}
                            color={theme.palette.secondary.main}
                        />
                    </Box>
                </Grid>

                <Grid item sm={2}   >
                    <Box textAlign="center" className={style.paginationPages}>
                        {`${actualPage} ${t('Of')} ${numberOfPages}`}
                    </Box>
                </Grid>

                <Grid item sm={2} >
                    <Box textAlign="center" className={style.paginationArrow} >
                        <Icon 
                            onClick={() => pageForward(actualPage, numberOfPages)}
                            path={mdiArrowLeftThick}
                            size={1}
                            horizontal
                            rotate={0}
                            color={theme.palette.secondary.main}
                        />
                    </Box>
                </Grid>
            </Grid>

        </React.Fragment>
    )
}

Pagination.propTypes = {
    actualPage: T.number,
    numberOfPages: T.number,
    pageBack: T.func,
    pageForward: T.func,
};
