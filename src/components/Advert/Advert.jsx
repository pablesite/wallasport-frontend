import React from 'react';
import { useTranslation } from 'react-i18next';
import T from 'prop-types';
import { TwitterShareButton, TwitterIcon, FacebookShareButton, FacebookIcon } from "react-share";

import DeleteAlert from '../DeleteAlert';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import EditIcon from '@material-ui/icons/Edit';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';

import { makeStyles } from '@material-ui/core/styles';
// import { theme } from '../../styles';
import { styles } from './styles';


const useStyles = makeStyles(styles);


export default function Advert(props) {

  const [t] = useTranslation();
  const style = useStyles();


  // Origin props of the component
  const { advert } = props;

  // State of store
  const {
    user, findInFavourites, //user
    showAdvertDetail        //appSelector  
  } = props;

  // Actions of the store
  const { goToAdvertDetail, goToCreateAdvert, goToUpdateAdvert, markAsFavourite, markAsReserved, markAsSold } = props;


  return (

    <Card
      className={showAdvertDetail === false ? style.advertRoot : style.advertRootDetail}>

      <div className={advert.name && advert.sold ? style.advertSold : (advert.reserved ? style.advertReserved : '')}>

        {advert.name && advert.reserved && showAdvertDetail &&
          <div className={style.advertReservedText}>{t('Reserved')}</div>}

        {advert.name && advert.sold && showAdvertDetail &&
          <div className={style.advertSoldText}>{t('Sold')}</div>}

        {advert.name &&
          <CardMedia
            className={style.advertMedia}
            image={advert.photo !== '' ? `${process.env.REACT_APP_IMG_URL}/${advert.photo}` : `${process.env.REACT_APP_IMG_URL}/no-photo.gif`}
            title={advert.name}
            onClick={() => goToAdvertDetail(advert.slugName)}
          />}

        {advert.name &&
          <Typography
            className={showAdvertDetail === false ? style.advertUserOwner : style.advertUserOwnerDetail}
            variant="body2" color="inherit" >
            '{advert.userOwner}'
      </Typography>}

        {advert.name &&
          <Avatar
            className={showAdvertDetail === false ? style.advertAvatar : style.advertAvatarDetail}
            // src={'https://i.pravatar.cc/300'} 
   
            src={(advert.userOwner === user.username) && user.photo ? `${process.env.REACT_APP_IMG_URL}/${user.photo}` : `${process.env.REACT_APP_IMG_URL}/no-photo.gif`} //esto está mal. Sólo vería las fotos del usuario logueado. Me falta las referencias de User en Advert en mongo
            />}
        {advert.name &&
          <CardHeader
            classes={{
              title: showAdvertDetail === false ? style.advertCardHeaderTitle : style.advertCardHeaderTitleDetail,
              root: showAdvertDetail === false ? style.advertCardHeaderRoot : style.advertCardHeaderRootDetail,
            }}
            avatar={
              advert.type ?
                <Avatar className={showAdvertDetail === false ? style.advertAvatarSale : style.advertAvatarSaleDetail}>
                  {t('Sale')}
                </Avatar>
                :
                <Avatar className={showAdvertDetail === false ? style.advertAvatarBuy : style.advertAvatarBuyDetail}>
                  {t('Buy')}
                </Avatar>
            }
            title={advert.price && advert.price + '€'}
            subheader={advert.name}
          />
        }
        {!advert.name &&
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {t('UploadYourProduct')}
            </Typography>
            <Button

              className={style.advertButton}
              size="small"
              variant="outlined"
              color="primary"
              onClick={() => goToCreateAdvert()}
            >
              {t('CreateAdvert')}
            </Button>

          </CardContent>}

        <CardContent>
          <Typography
            className={showAdvertDetail === false ? style.advertDescription : style.advertDescriptionDetail}

            variant="body2" color="textSecondary" component="p">
            {advert.description}
          </Typography>

          {showAdvertDetail &&
            <Typography
              className={showAdvertDetail === false ? style.advertTags : style.advertTagsDetail}
              variant="body2" color="textSecondary" component="p">

              {'Tags: ' + advert.tags.map((tags, i) => (
                i === (advert.tags.length - 1) ? ` ${tags}.` : ` ${tags}`))}

            </Typography>}

        </CardContent>

        <Grid container justify='space-between' alignItems='center' >

          <Grid item>
            {advert.name && showAdvertDetail &&
              <CardActions disableSpacing>

                <IconButton aria-label="add to favorites"
                onClick={() => markAsFavourite(user, advert._id)}>
                  <FavoriteIcon 
                  color={findInFavourites ? "primary" : "inherit"} /> 
                </IconButton>

                {(advert.userOwner === user.username) &&
                  <IconButton aria-label="mark as reserved"
                    onClick={() => markAsReserved(advert, user.token)}>
                    <AssignmentIcon
                      color={advert.reserved ? "primary" : "inherit"} />
                  </IconButton>}

                {(advert.userOwner === user.username) &&
                  <IconButton aria-label="mark as sold"
                    onClick={() => markAsSold(advert, user.token)}>
                    <AssignmentTurnedInIcon
                      color={advert.sold ? "primary" : "inherit"} />
                  </IconButton>}

                {(advert.userOwner === user.username) &&
                  <IconButton onClick={() => goToUpdateAdvert(advert.slugName)} >
                    <EditIcon />
                  </IconButton>}

                {(advert.userOwner === user.username) &&
                  <DeleteAlert type='advert' item={advert.slugName} />}
              </CardActions>}

          </Grid>

          <Grid item className={style.advertSocialNetwork} >
            {advert.name && showAdvertDetail &&
              <CardActions >

                <TwitterShareButton
                  url={`${process.env.REACT_APP_ADV_URL}/${advert.slugName}`}
                  title={t('postSocialNetwork')}
                >
                  <TwitterIcon size={32} round={true} />
                </TwitterShareButton>

                <FacebookShareButton
                  url={`${process.env.REACT_APP_ADV_URL}/${advert.slugName}`}
                  quote={t('postSocialNetwork')}
                >
                  <FacebookIcon size={32} round={true} />
                </FacebookShareButton>

              </CardActions>}

          </Grid>
        </Grid>
      </div>
    </Card>

  );
}

Advert.propTypes = {
  advert: T.object,
  user: T.object,
  showAdvertDetail: T.bool,
  goToAdvertDetail: T.func,
  goToCreateAdvert: T.func,
  goToUpdateAdvert: T.func,
  markAsFavourite: T.func,
  markAsReserved: T.func,
  markAsSold: T.func,
};
