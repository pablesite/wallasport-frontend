import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Grid from '@material-ui/core/Grid';

import "./Advert.css"

export default function Advert(props) {


  const goToDetail = () => {
    // props.history.push(`/detail/${props.advert._id}`);
  };


  const { advert } = props;


  return (
    <React.Fragment>
      <Grid
        onClick={goToDetail}
        item
        xs={10}
        sm={3}>

        <Card className="card">

          {/* <div className="card"> */}

          <CardHeader
            className="limit-height-12vh"

            avatar={
              <Avatar aria-label="recipe" className='avatar'>
                {advert.type}
              </Avatar>
            }

            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }

            title={advert.name}

            subheader={'Tags: ' + advert.tags.map((tags, i) => (
              i === (advert.tags.length - 1) ? ` ${tags}.` : ` ${tags}`
            ))}

          />

          <CardMedia
            className="media"
            image={advert.photo !== 'noPhoto' ? `http://localhost:3003/${advert.photo}` : `http://localhost:3003/noHayImagen.gif`}
            title={advert.name}
          />

          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p" className="limit-height-6vh">
              {advert.description}
            </Typography>

            <div className="price-text">
              Precio: {advert.price} €.
                </div>
          </CardContent>


          {/* </div> */}
        </Card>
      </Grid >
    </React.Fragment>
  );
}


// export default withRouter(Advert);
