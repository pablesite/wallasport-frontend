import { theme } from '../../styles';

export const styles = {
  root: {
    margin: 5,
    // maxWidth: 245,
    width: 225,

    // maxHeight: 545,
    height: 330,
  },

  rootDetail: {
    margin: 5,
    // maxWidth: 245,
    width: 550,

    // maxHeight: 545,
    // height: 680,
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

  avatar: {
    width: 50,
    height: 50,
    border: '2px solid #fff',
    margin: '-43px 22px 0 auto',
    '& > img': {
      margin: 0,
    },
  },

  avatarDetail: {
    width: 100,
    height: 100,
    border: '4px solid #fff',
    margin: '-86px 44px 0 auto',
    '& > img': {
      margin: 0,
    },
  },

  userOwner: {
    color: theme.palette.primary.main,
    display: 'inline',
    paddingLeft: '3em'

  },
  userOwnerDetail: {
    color: theme.palette.primary.main,
    paddingTop: '1em',
    paddingLeft: '3em',
    fontSize: 'x-large',
  },

  cardHeaderTitle: {
    color: 'inherit',
    fontSize: 'medium',
  },


  cardHeaderTitleDetail: {
    color: 'inherit',
    fontSize: 'x-large',
  },

  cardHeaderRoot: {
    paddingTop: 0,
    paddingBottom: 0,
  },

  cardHeaderRootDetail: {
    margin: 0,
  },

  description: {
    fontSize: 'small',
    maxHeight: 110,
    overflow: 'hidden',
  },

  descriptionDetail: {
    fontSize: 'medium',
    minHeight: 100,
  },

}