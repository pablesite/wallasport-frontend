import { theme } from '../styles';

export const styles = {

    filteringContainer: {
        borderRadius: '10px 10px 10px 10px',
        border: '0px solid #000000',   
        padding: 0,
        maxWidth: '100%',         
    }, 

    filteringExpansionPanel: {
        backgroundColor: theme.palette.primary.main,
        padding: '0px',
        margin: '0px',
        color:'white',
    },

    filteringExpansionSummary: {
        maxHeight: '30px',
        margin: 0,
    },

    filteringHeading: {

    },

    filteringExpansionDetails: {
        display: 'flex',
        justifyContent: 'center',
        
    },

    filteringSubmit: {
        display: 'flex',
        justifyContent: 'center',
    },

    filteringButton: {
        borderRadius: '20px 20px 20px 20px',
        textTransform: 'none',
    
      },


}