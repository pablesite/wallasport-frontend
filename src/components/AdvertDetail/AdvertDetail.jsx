import React, { useState, useEffect } from 'react';

import Profile from '../Profile';
import Footer from '../Footer';
import Loading from '../Loading';
import Error from '../Error';
import Advert from '../Advert'

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

import { makeStyles } from '@material-ui/core/styles';
import { theme } from '../../styles';
import { styles } from './styles';

// import './AdvertDetail.css'

const useStyles = makeStyles(styles);

export default function AdvertDetail(props) {


  const styles = useStyles();

  const { user, adverts, isFetching, error, goDetail, checkUser, actualPage, numberOfPages, location, locateAdvertFromUrl, advertsState } = props;

  useEffect(() => {
    goDetail(locateAdvertFromUrl._id)
  }, [locateAdvertFromUrl]);



  return (
    <React.Fragment>

      <Profile />

      {isFetching && <Loading className="app-loading" />}
      {error && <Error className="app-error" error={error} />}


      {!isFetching && adverts && adverts.length === 0 &&

        <h4>No hay anuncios. Pruebe otra búsqueda por favor.</h4>}


      {adverts && adverts.length !== 0 &&

        <div className={styles.grid}>
          < Grid
            container
            alignItems='center'
            alignContent='space-between'
            spacing={1}>

            {/* <Advert advert={adverts[actualPage][0]} /> */}
            <Advert advert={locateAdvertFromUrl} />
          </Grid>
        </div>}

        <div className={styles.footer}>
          <Footer />
        </div>

      {/* <div className="container">
          {
            advert
            &&
            <Container component="main" maxWidth="sm">
              <CssBaseline />

              <div className='paper'>
                <Grid container alignItems='center' alignContent='center' spacing={2}>

                  <Grid item xs={12} >
                    <Card className="card">
                      <div className="card-detail">
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
                      </div>
                    </Card>
                  </Grid >

                  <Grid item xs={12} sm={6}>
                    <Button variant="contained"
                      color="secondary"
                      onClick={this.goHome}
                      fullWidth
                    >
                      Back to home
                      </Button>
                  </Grid>

                  <Grid item xs={12} sm={6} >
                    <Button variant="contained"
                      color="primary"
                      onClick={this.updateAdvert}
                      fullWidth
                    >
                      Update Advert
                      </Button>
                  </Grid>


                </Grid>
              </div>
            </Container>
          }

          {isFetching && <Loading className="app-loading" />}
          {error && <Error className="app-error" error={error} />}

          {
            !isFetching
            &&
            !advert
            &&
            <h1>There is not adverts...</h1>
          }

        </div> */}


    </React.Fragment>
  )
}


