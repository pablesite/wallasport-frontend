import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#8ee7c9',
            main: '#56e2b6',
            dark: '#219d76',
            contrastText: '#fff',
        },
        secondary: {
            light: '#696969',
            main: '#444444',
            dark: '#2f2f2f',
            contrastText: '#fff',
        },
    },
    overrides: {
        MuiAvatar: {
            colorDefault: {
                backgroundColor: '#56e2b6',
            }
        }
    }
});



export const useStyles = makeStyles({
   

    /////////////////////////////
    errorError: {
        fontSize: '1.2rem',
        textAlign: 'center',
        color: 'red',
        margin: '1rem 0',
    },
    errorMessage: {
        margin: '0 1rem',
    },
    apiUnavailable: {
        flexGrow: 1,
        backgroundColor: '#56e2b6',
        color: 'white',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '4em'
    },

    ///////////////////////////////


      
  

    });
