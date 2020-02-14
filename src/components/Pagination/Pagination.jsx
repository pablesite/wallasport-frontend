import React from "react";

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { mdiArrowLeftThick } from '@mdi/js';
import Icon from '@mdi/react'

import { makeStyles } from '@material-ui/core/styles';
import { theme } from '../../styles';
import { styles } from './styles';


const useStyles = makeStyles(styles);

export default function Pagination(props) {

    const { actualPage, numberOfPages, pageBack, pageForward } = props;
    const styles = useStyles();

    return (
        <React.Fragment>

            <Grid container alignItems='center' alignContent='space-between' spacing={1} justify='center'>
                <Grid item sm={2}>
                    <Box textAlign="center" className={styles.paginationArrow} >
                        <Icon className='login-arrow'
                            onClick={() => pageBack(actualPage, numberOfPages)}
                            path={mdiArrowLeftThick}
                            size={1}
                            horizontal
                            rotate={180}
                            color={theme.palette.primary.main}
                        />
                    </Box>
                </Grid>

                <Grid item sm={2}   >
                    <Box textAlign="center" className={styles.pages}>
                        {`${actualPage} of ${numberOfPages}`}
                    </Box>
                </Grid>

                <Grid item  sm={2} >
                    <Box textAlign="center" className={styles.paginationArrow} >
                        <Icon className='login-arrow'
                            onClick={() => pageForward(actualPage, numberOfPages)}
                            path={mdiArrowLeftThick}
                            size={1}
                            horizontal
                            rotate={0}
                            color={theme.palette.primary.main}
                        />
                    </Box>
                </Grid>
            </Grid>

        </React.Fragment>
    )
}

