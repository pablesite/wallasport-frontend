import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import T from 'prop-types';

import Profile from '../Profile';
import Footer from '../Footer';
import Loading from '../Loading';
import Error from '../Error';
import Advert from '../Advert'
import Login from '../Login';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';
import { styles } from './styles';


const useStyles = makeStyles(styles);


export default function AdvertDetail(props) {

  const styles = useStyles();
  const [t] = useTranslation();

  // State of store
  const {
    adverts, locateAdvertFromUrl,                 //adverts
    isFetching, error,                            //ui
    showLogin, showRegister, showUserRegistered,  //appSelectors
  } = props;

  // Actions of the store
  const { goToAdvertDetail } = props;


  useEffect(() => {
      if (locateAdvertFromUrl !== undefined && locateAdvertFromUrl.slugName !== undefined) {
        goToAdvertDetail(locateAdvertFromUrl.slugName)

      }
  }, [goToAdvertDetail, locateAdvertFromUrl]);


  return (
    <React.Fragment>

      {showLogin && <Login />}
      {showRegister && <Login />}
      {showUserRegistered && <Login />}

      <Profile />

      {isFetching && <Loading />}
      {error && !showLogin && !showRegister && !showUserRegistered && <Error error={error} />}


      {!isFetching && adverts && adverts.length === 0 &&

        <Typography
          className={styles.advertDetailHomeNoAdverts}
          variant="body2" color="inherit" >
          {t('NoAdverts')}
        </Typography>

      }
  
      {adverts && adverts.length !== 0 && locateAdvertFromUrl !== undefined &&
        <div className={styles.advertDetailGrid}>
          < Grid
            container
            alignItems='center'
            justify="center"
            spacing={1}>
            <Advert {...props} advert={locateAdvertFromUrl} />

          </Grid>
        </div>}

      <div className={styles.advertDetailFooter}>
        <Footer />
      </div>

    </React.Fragment>
  )
}

AdvertDetail.propTypes = {
  adverts: T.object,
  locateAdvertFromUrl: T.object,
  isFetching: T.bool,
  error: T.objectOf(Error),
  showLogin: T.bool,
  showRegister: T.bool,
  showUserRegistered: T.bool,
  goToAdvertDetail: T.func,
};
