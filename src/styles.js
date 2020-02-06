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
                backgroundColor: '#56e2b6'
            }
        }
    }
});


export const useStyles = makeStyles(() => ({
    loginAvatar: {
        margin: '.5em',
        marginTop: '0em'
    },
    loginBackground: {
        background: 'rgba(142, 231, 201, 0.55)', 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        height: '100vh',
        width: '100vw',
        zIndex: '1'

    },
    loginForm: {
        margin: '1rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    loginSubmit: {
        margin: '2rem 0 2rem',
        display: 'flex',
        justifyContent: 'center',
    },
    loginContainer: {
        backgroundColor: '#FAFAFA',
        borderRadius: '10px 10px 10px 10px',
        border: '0px solid #000000',
        
    },
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
    homeIcon: {
        marginRight: '18rem',
        color: theme.palette.primary.main,
        '& > svg': {
          marginTop: theme.spacing(2),
        },
        '&:hover': {
            color:theme.palette.primary.dark,
            cursor: 'pointer' ,
        }
      },

}));
