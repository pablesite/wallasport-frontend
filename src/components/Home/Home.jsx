import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import T from 'prop-types';

import Profile from '../Profile';
import Footer from '../Footer';
import Loading from '../Loading';
import Error from '../Error';
import Login from '../Login';
import Pagination from '../Pagination';
import Advert from '../Advert'
import Filtering from '../Filtering'

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';
// import { theme } from '../../styles';
import { styles } from './styles';


const useStyles = makeStyles(styles);


export default function Home(props) {

  const [t] = useTranslation();
  const style = useStyles();

  // State of store
  const {
    adverts, actualPage,                         //adverts
    isFetching, error,                           //ui
    showLogin, showRegister, showUserRegistered, //appSelector                                  
  } = props;

  // Acctions of store
const { showListAction } = props;


  useEffect(() => {
    showListAction()
  }, [showListAction]);

  return (
    <React.Fragment>

      {showLogin && <Login />}
      {showRegister && <Login />}
      {showUserRegistered && <Login />}

      <Profile />
     
      {isFetching && <Loading />}
      {error && !showLogin && !showRegister && !showUserRegistered && <Error error={error} />}

      <Filtering />

      {!isFetching && adverts && (adverts.length === 0 || Object.keys(adverts).length === 0) &&
        <Typography
          className={style.homeNoAdverts}
          variant="body2" color="inherit" >
          {t('NoAdverts')}
        </Typography>}


      {adverts && adverts.length !== 0 && Object.keys(adverts).length !== 0 &&
        <div className={style.homeGrid}>
          < Grid
            container
            alignItems='center'
            alignContent='space-between'
            justify="center"
            spacing={1}>

            {
              adverts[actualPage].map(function (advert, i) {
                return <Advert {...props} key={i} advert={advert} />
              })
            }

          </Grid>
        </div>}

      <div className={style.homeGridPagination}>
        < Grid
          container
          alignItems='center'
          alignContent='space-between'
          spacing={1}>

          {adverts && adverts.length !== 0 && Object.keys(adverts).length !== 0 &&
            <Pagination />}

        </Grid>
      </div>

      <Footer />

    </React.Fragment >
  );
}

Home.propTypes = {
  adverts: T.object,
  actualPage: T.number,
  isFetching: T.bool,
  error: T.objectOf(Error),
  showLogin: T.bool,
  showRegister: T.bool,
  showUserRegistered: T.bool,
  showListAction: T.func,

};

