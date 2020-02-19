import { theme } from '../styles';

export const styles = {

    userDetailRoot: {
        margin: '5vw',
      },

      userDetailCard: {
          borderStyle:'hidden',
          boxShadow:  '0px 0px 0px 0px rgba(0,0,0,0),0px 0px 0px 0px rgba(0,0,0,0.14),0px 0px 0px 0px rgba(0,0,0,0.12)',
      },

    userDetailMedia: {
        height: 0,
        paddingTop: '56.25%', // 16:9
        '&:hover': {
            cursor: 'pointer',
        }
    },

    userDetailCardHeaderTitle: {
        color: 'inherit',
        fontSize: 'medium',
        paddingBottom: 20,
        textAlign: 'center',
    },

    userDetailCardHeaderRoot: {
        paddingTop: 20,
        paddingBottom: 0,
    },

    userDetailDescription: {
        fontSize: 'small',
        maxHeight: 78,
        overflow: 'hidden',
    },

}