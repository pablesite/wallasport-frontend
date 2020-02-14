import { theme } from '../../styles';
import { mdiArmFlex } from '@mdi/js';

export const styles = {
  root: {
    margin: 5,
    // maxWidth: 245,
    width: 225,
    // width: '13vw',

    // maxHeight: 545,
    height: 330,
    // height: '17vw',
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
    width: '2vw',
    height: '2vw',
  },
  avatarBuy: {
    backgroundColor: theme.palette.secondary.main,
    width: '2vw',
    height: '2vw',
  },

  avatar: {
    width: 50,
    height: 50,
    // width: '3vw',
    // height: '3vw',
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
    maxHeight: 78,
    // maxHeight: '4vh',
    overflow: 'hidden',
  },

  descriptionDetail: {
    fontSize: 'medium',
    minHeight: 100,
  },
  advertButton: {
    borderRadius: '20px 20px 20px 20px',
    textTransform: 'none',
  },



}