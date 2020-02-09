import { theme } from '../../styles';

export const styles = {
  root: {
    margin: 5,
    // maxWidth: 245,
    width: 245,

    // maxHeight: 545,
    height: 380,
  },

  root1: {
    margin: 5,
    // maxWidth: 245,
    width: 550,

    // maxHeight: 545,
    height: 760,
  },

  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    '&:hover': {
      cursor: 'pointer',
    }
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatarSale: {
    backgroundColor: theme.palette.primary.main,
  },
  avatarBuy: {
    backgroundColor: theme.palette.secondary.main,
  },
}