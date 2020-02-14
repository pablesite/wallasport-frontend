import React from 'react';
import { useTranslation } from 'react-i18next';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';


import { makeStyles } from '@material-ui/core/styles';
// import { theme } from '../../styles';
import { styles } from './styles';
// import { user } from '../../store/reducers';

const useStyles = makeStyles(styles);

export default function Advert(props) {

  const [t, i18n] = useTranslation();
  const style = useStyles();

  const { advert, user, goToDetail, detail, goUpdateAdvert, deleteAdvert } = props;

  // const [expanded, setExpanded] = React.useState(false);

  // const editAdvert = () => {
  //     goUpdateAdvert(advert.slugName)
  // };

  console.log('anuncio que llega a advert' , advert)
 
  return (
    <Card
      className={detail === false ? style.root : style.rootDetail}>

      {advert.name &&
        <CardMedia
          className={style.media}
          image={advert.photo !== '' ? `https://localhost:3002/img/${advert.photo}` : `https://localhost:3002/img/no-photo.gif`}
          title={advert.name}
          onClick={() => goToDetail(advert.slugName)}
        />}

      {advert.name &&
        <Typography
          className={detail === false ? style.userOwner : style.userOwnerDetail}
          variant="body2" color="inherit" >
          '{advert.userOwner}'
      </Typography>}


      {advert.name &&
        <Avatar
          className={detail === false ? style.avatar : style.avatarDetail}
          src={'https://i.pravatar.cc/300'} />}

      {advert.name &&
        <CardHeader
          classes={{
            title: detail === false ? style.cardHeaderTitle : style.cardHeaderTitleDetail,
            root: detail === false ? style.cardHeaderRoot : style.cardHeaderRootDetail,
          }}
          // className={detail === false ? style.cardHeader : style.cardHeaderDetail}
          avatar={
            advert.type ?
              <Avatar className={style.avatarSale}>
                Sale
             </Avatar>
              :
              <Avatar className={style.avatarBuy}>
                Buy
             </Avatar>
          }
          title={advert.price && advert.price + '€'}
          subheader={advert.name}
        />
      }
      {!advert.name &&
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            No esperes más. Sube ya tu producto.
            </Typography>
          <Button

            className={style.advertButton}
            size="small"
            variant="outlined"
            color="primary"
            href='/createOrUpdate/'
          >
            {t('CreateAdvert')}
          </Button>

        </CardContent>}

      <CardContent>
        <Typography
          className={detail === false ? style.description : style.descriptionDetail}

          variant="body2" color="textSecondary" component="p">
          {advert.description}
        </Typography>

        {detail &&
          <Typography
            className={detail === false ? style.tags : style.tags}
            variant="body2" color="textSecondary" component="p">

            {'Tags: ' + advert.tags.map((tags, i) => (
              i === (advert.tags.length - 1) ? ` ${tags}.` : ` ${tags}`))}

          </Typography>}


      </CardContent>

      {advert.name && detail && 
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          
          {(advert.userOwner == user.username) &&
          <IconButton onClick={() => goUpdateAdvert(advert.slugName)} > 
            <MoreVertIcon />
          </IconButton> }

          {(advert.userOwner == user.username) &&
          <IconButton onClick={() => deleteAdvert(advert.slugName)} > 
            <MoreVertIcon />
          </IconButton> }

        </CardActions>}

    </Card>
  );
}