import { theme } from '../styles';

export const styles = {
    
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

    loginContainer: {
        backgroundColor: '#FAFAFA',
        borderRadius: '10px 10px 10px 10px',
        border: '0px solid #000000',
    }, 

    loginForm: {
        margin: '1rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    
    loginArrow: {
        marginRight: '21rem',
        color: theme.palette.primary.main,
        '& > svg': {
          marginTop: theme.spacing(2),
        },
        '&:hover': {
            color:theme.palette.primary.dark,
            cursor: 'pointer' ,
        }
      },

    loginAvatar: {
        margin: '.5em',
        marginTop: '0em'
    },

    loginButton: {

    },

    loginSubmit: {
        margin: '2rem 0 2rem',
        display: 'flex',
        justifyContent: 'center',
    },
    
}