import React, { useEffect } from 'react';

import Profile from '../Profile';
import Footer from '../Footer';
import Loading from '../Loading';
import Error from '../Error';
import Advert from '../Advert'
import Login from '../Login';

import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';
import { styles } from './styles';


const useStyles = makeStyles(styles);

export default function AdvertDetail(props) {


  const styles = useStyles();

  const { showLogin, showRegister, showUserRegistered, adverts, isFetching, error, getOneAdvert, locateAdvertFromUrl  } = props;

  useEffect(() => {
    getOneAdvert(locateAdvertFromUrl.slugName)
  }, [locateAdvertFromUrl]);


  return (
    <React.Fragment>

      {showLogin && <Login />}
      {showRegister && <Login />}
      {showUserRegistered && <Login />}

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
            justify="center"
            spacing={1}>

            {/* <Advert advert={adverts[actualPage][0]} /> */}
            <Advert advert={locateAdvertFromUrl} />
          </Grid>
        </div>}

      <div className={styles.footer}>
        <Footer />
      </div>

    </React.Fragment>
  )
}


