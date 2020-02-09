import { theme } from '../../styles';

export const styles = {
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

  profileRoot: {
    // flexGrow: 1,
  },

  profileToolbar: {
    minHeight: 50,
  },

  profileTitle: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },

  profileItemsLeft: {
    display: 'flex',
    justifyContent: 'left',
  },

  profileItemsCenter: {
    display: 'flex',
    justifyContent: 'center',

  },
  profileItemsRight: {
    display: 'flex',
    justifyContent: 'right',
  },

  profileButton: {
    borderRadius: '20px 20px 20px 20px',
    textTransform: 'none',
  },

  littleText: {
    borderRadius: '20px 20px 20px 20px',
    textTransform: 'none',
    fontSize: '.85em',
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

}