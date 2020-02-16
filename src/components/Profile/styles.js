import { theme } from '../styles';

export const styles = {

  profileToolbar: {
    minHeight: 50,
  },

  profileItemsLeft: {
    display: 'flex',
    justifyContent: 'left',
  },

  profileItemsRight: {
    display: 'flex',
    justifyContent: 'right',
  },

  profileHomeIcon: {
    color: theme.palette.primary.main,
    '& > svg': {
      marginTop: theme.spacing(2),
    },
    '&:hover': {
      color: theme.palette.primary.dark,
      cursor: 'pointer',
    }
  },

  profileTranslate: {
    marginRight: '.5em',
    marginLeft: '.3em',
    color: theme.palette.primary.main,
    fontSize: '.85em',
    '&:hover': {
      color: theme.palette.primary.dark,
      cursor: 'pointer',
    },
  },

  profileTranslateDark: {
    marginRight: '.5em',
    marginLeft: '.3em',
    color: theme.palette.primary.dark,
    fontSize: '.85em',
    '&:hover': {
      cursor: 'pointer',
    },
  },

  profileButton: {
    borderRadius: '20px 20px 20px 20px',
    textTransform: 'none',
  },

  profileMenuItem: {
    color:theme.palette.primary.main,
    '&:hover': {
      color: '#fff',
      backgroundColor: theme.palette.primary.main,
    }
  },

  proflieLittleText: {
    borderRadius: '20px 20px 20px 20px',
    textTransform: 'none',
    fontSize: '.85em',
  },


}