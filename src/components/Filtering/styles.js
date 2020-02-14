import { theme } from '../../styles';

export const styles = {
    filteringAvatar: {
        margin: '.5em',
        marginTop: '0em'
    },
    filteringBackground: {
        background: 'rgba(142, 231, 201, 0.55)', 
        // display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // position: 'absolute',
        // height: '100vh',
        // width: '100vw',
        // zIndex: '1',
        paddingTop: '.5em',
        // paddingBottom: '1em',

    },
    filteringForm: {
        margin: '1rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    filteringSubmit: {
    
        display: 'flex',
        justifyContent: 'center',
    },
    filteringContainer: {
        // backgroundColor: '#FAFAFA',
        borderRadius: '10px 10px 10px 10px',
        border: '0px solid #000000',   
        padding: 0,
        maxWidth: '100%',
        // paddingTop: '1em',  
        // paddingBottom: '1em', 
         
    }, 

    expansionDetails: {
        display: 'flex',
        justifyContent: 'center',
        
    },


    expansionPanel: {
        // background: 'rgba(142, 231, 201, 1)',
        backgroundColor: theme.palette.primary.main,
        padding: '0px',
        margin: '0px',
        color:'white',
    
    },

    

    expansionSummary: {
        maxHeight: '30px',
        margin: 0,
        
    
    },

   
    
  filteringButton: {
    borderRadius: '20px 20px 20px 20px',
    textTransform: 'none',

  },

   
    filteringArrow: {
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

}