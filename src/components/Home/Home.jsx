import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import Profile from '../Profile';
import Footer from '../Footer';
import Loading from '../Loading';
import Error from '../Error';
import Login from '../Login';
import Pagination from '../Pagination';
import Advert from '../Advert'
import Filtering from '../Filtering'

import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';
// import { theme } from '../../styles';
import { styles } from './styles';




const useStyles = makeStyles(styles);

export default function Home(props) {


  const { adverts, error, isFetching, actualPage, showLogin, showRegister, showUserRegistered, advertsSuccess } = props;

  // const [t, i18n] = useTranslation();

  const styles = useStyles();

  // const [filters, setFilters] = useState({
  //   nombre: '',
  //   precio: '',
  //   tags: '',
  //   venta: ''
  // });


//   const [update, setUpdate] = useState(true);


// getAdverts();

  useEffect(() => {
     advertsSuccess(false);

    // Object.keys(adverts).length
    
    // setUpdate(true)
   
    // setUpdate(false)

  }, []);


  // useEffect(() => {
  //   // advertsSuccess(false);

  //   if (update) {
  //     getAdverts();
  //     setUpdate(false)
  //   }

  // }, []);



  return (
    <React.Fragment>

      {showLogin && <Login />}
      {showRegister && <Login />}
      {showUserRegistered && <Login />}

      <Profile />


      {isFetching && <Loading className="app-loading" />}
      {error && <Error className="app-error" error={error} />}


      {true &&
        <Filtering />}


      {!isFetching && adverts && (adverts.length === 0 || Object.keys(adverts).length === 0) &&

        <h3>No hay anuncios. Pruebe otra búsqueda por favor.</h3>}


      {adverts && adverts.length !== 0 && Object.keys(adverts).length !== 0 &&

        <div className={styles.grid}>
          < Grid
            container
            alignItems='center'
            alignContent='space-between'
            justify="center"
            spacing={1}>

            {
              adverts[actualPage].map(function (advert, i) {
                return <Advert key={i} advert={advert} />
              })
            }

          </Grid>
        </div>}



      <div className={styles.gridPagination}>
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
