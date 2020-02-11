import React from 'react';
import { useTranslation } from 'react-i18next';

import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';


import { makeStyles } from '@material-ui/core/styles';
import { theme } from '../../styles';
import { styles } from './styles';

const useStyles = makeStyles(styles);

export default function Advert(props) {

  const [t, i18n] = useTranslation();
  const style = useStyles();


  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const { advert, goToDetail, detail } = props;

  return (
    <Card
      className={detail === false ? style.root : style.rootDetail}>

      <CardMedia
        className={style.media}
        image={advert.photo !== 'noPhoto' ? `https://localhost:3002/img/${advert.photo}` : `https://localhost:3002/img/noHayImagen.gif`}
        title={advert.name}
        onClick={() => goToDetail(advert._id)}
      />

      <Typography
        className={detail === false ? style.userOwner : style.userOwnerDetail}
        variant="body2" color="inherit" >
        '{advert.userOwner}'
      </Typography>

      <Avatar
        className={detail === false ? style.avatar : style.avatarDetail}
        src={'https://i.pravatar.cc/300'} />

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
          //esto lo puedo usar para editar el anuncio en la versión privada
          // action={
          //   <IconButton aria-label="settings">
          //     <MoreVertIcon />
          //   </IconButton>
          // }
          title={advert.price && advert.price + '€'}
          subheader={advert.name}
        />
      }
      {!advert.name &&
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            No esperes más. Sube ya tu producto.
        </Typography>
          {/* <Button>Sube producto</Button> */}
        </CardContent>}

      <CardContent>
        <Typography 
        className={detail === false ? style.description : style.descriptionDetail}
        
        variant="body2" color="textSecondary" component="p">
          {advert.description}
        </Typography>
      </CardContent>

      {advert.name && detail &&
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={clsx(style.expand, {
              [style.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>}

    </Card>
  );
}