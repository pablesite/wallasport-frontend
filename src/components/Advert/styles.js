import { theme } from '../styles';

export const styles = {
  advertRoot: {
    margin: 5,
    width: 225,
    height: 330,
  },

  advertRootDetail: {
    margin: 5,
    width: 550,
  },

  advertMedia: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    '&:hover': {
      cursor: 'pointer',
    }
  },

  advertUserOwner: {
    color: theme.palette.primary.main,
    display: 'inline',
    paddingLeft: '3em'

  },
  advertUserOwnerDetail: {
    color: theme.palette.primary.main,
    paddingTop: '1em',
    paddingLeft: '3em',
    fontSize: 'x-large',
  },

  advertAvatar: {
    width: 70,
    height: 70,
    border: '2px solid #fff',
    margin: '-43px 22px 0 auto',
    '& > img': {
      margin: 0,
    },
  },

  advertAvatarDetail: {
    width: 100,
    height: 100,
    border: '4px solid #fff',
    margin: '-86px 44px 0 auto',
    '& > img': {
      margin: 0,
    },
  },

  advertCardHeaderTitle: {
    color: 'inherit',
    fontSize: 'medium',
  },


  advertCardHeaderTitleDetail: {
    color: 'inherit',
    fontSize: 'x-large',
  },

  advertCardHeaderRoot: {
    paddingTop: 0,
    paddingBottom: 0,
  },

  advertCardHeaderRootDetail: {
    margin: 0,
  },

  advertAvatarSale: {
    backgroundColor: theme.palette.primary.main,
    width: 50,
    height: 50,
    fontSize: 'small'
  },

  advertAvatarSaleDetail: {
    backgroundColor: theme.palette.primary.main,
    width: 70,
    height: 70,
  },

  advertAvatarBuy: {
    backgroundColor: theme.palette.secondary.main,
    width: 50,
    height: 50,
    fontSize: 'small'
  },

  advertAvatarBuyDetail: {
    backgroundColor: theme.palette.secondary.main,
    width: 70,
    height: 70,
  },

  advertButton: {
    borderRadius: '20px 20px 20px 20px',
    textTransform: 'none',
  },

  advertDescription: {
    fontSize: 'small',
    maxHeight: 78,
    overflow: 'hidden',
  },

  advertDescriptionDetail: {
    fontSize: 'medium',
    minHeight: 100,
  },

  advertTags: {

  },

  advertTagsDetail: {
    
  },


}