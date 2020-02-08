import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderRounded from '@material-ui/icons/FavoriteBorderRounded';
import Share from '@material-ui/icons/Share';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useSoftRiseShadowStyles } from '@mui-treasury/styles/shadow/softRise';
import { useSlopeCardMediaStyles } from '@mui-treasury/styles/cardMedia/slope';
import { useBlogCardContentStyles } from '@mui-treasury/styles/cardContent/blog';
import TextInfoCardContent from '@mui-treasury/components/cardContent/textInfo';

import { styles } from './styles';


const useStyles = makeStyles(styles);

export default function Advert(props) {
  const cardStyles = useStyles();
  const mediaStyles = useSlopeCardMediaStyles();
  const shadowStyles = useSoftRiseShadowStyles();
  const textCardContentStyles = useBlogCardContentStyles();

  const { advert } = props;

  return (

    <Grid
      item
      sm={4}
    >


      <Card className={cx(cardStyles.root, shadowStyles.root)}>
        <CardMedia
          classes={mediaStyles}
          image={advert.photo !== 'noPhoto' ? `http://localhost:3003/${advert.photo}` : `http://localhost:3003/noHayImagen.gif`}

        />

        <Avatar className={cardStyles.avatar} src={'https://i.pravatar.cc/300'} />

        <CardContent className={cardStyles.content}>

          <TextInfoCardContent
            classes={textCardContentStyles}
            overline={advert.name}
            heading={advert.price + '€'}
            body={advert.description}

          />

          <Typography
            className={cardStyles.advertTags}
            color="textSecondary"
            variant='caption'>
            {'' + advert.tags.map((tags, i) => (
              i === (advert.tags.length - 1) ? ` ${tags}.` : ` ${tags}`
            ))}
          </Typography>

        </CardContent>

        <Box px={2} pb={2} mt={-1}>
          <IconButton>
            <Share />
          </IconButton>
          <IconButton>
            <FavoriteBorderRounded />
          </IconButton>
        </Box>

      </Card>
    </Grid >
  );
};

