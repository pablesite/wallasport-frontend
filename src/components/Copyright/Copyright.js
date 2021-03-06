import React from 'react';

import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

function Copyright(props) {
    return (
        <Typography variant="body2" color={props.color} align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://wsfrontend.codinglab.es/">
                WallaSport - Pablo Ruiz Molina
        </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default Copyright;
