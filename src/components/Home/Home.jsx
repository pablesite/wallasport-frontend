import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import Profile from '../Profile';
import Loading from '../Loading';
import Error from '../Error';
import Login from '../Login';

import Box from '@material-ui/core/Box';
import Pagination from '../Pagination/Pagination';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import "./Home.css"


export default function Home(props) {

  const type = [
    'sell',
    'buy',
  ];

  const { adverts, error, isFetching, loadAdverts, user, tagList, showLogin, showRegister, showUserRegistered } = props;

  const [t, i18n] = useTranslation();

  const [filters, setFilters] = useState({
    nombre: '',
    precio: '',
    tags: '',
    venta: ''
  });

  const [update, setUpdate] = useState(true);

  useEffect(() => {
    loadAdverts().then(() => setUpdate(true));
  }, [loadAdverts]);


  function disableUpdate() {
    setUpdate(false)
  }

  const onSubmit = (event) => {
    event && event.preventDefault();

    const { nombre, precio, tags, venta } = filters;
    let filterString = '';
    let temp = true;

    if (nombre) {
      filterString = 'nombre=' + nombre;
    }
    if (precio) {
      if (filterString === '') {
        filterString = 'precio=' + precio;
      } else {
        filterString = filterString + '&price=' + precio;
      }
    }
    if (tags) {
      if (filterString === '') {
        filterString = 'tags=' + tags;
      } else {
        filterString = filterString + '&tags=' + tags;
      }
    }

    if (venta) {
      if (venta === 'venta') {
        temp = true;
      } else {
        temp = false;
      }

      if (filterString === '') {
        filterString = 'venta=' + temp;
      } else {
        filterString = filterString + '&venta=' + temp;
      }
    }

    if (filterString && filterString.trim().length) {
      props.loadAdverts(filterString).then(() => setUpdate(true))
    } else {
      props.loadAdverts().then(() => setUpdate(true))

    }

  }


  const onInputChange = (event) => {

    const { name, value } = event.target;

    if (name === 'precio') {
      const regExp = /\d*(?:-)\d*/;
      let newValue = regExp.exec(value);
      if (newValue == null) {
        if (!(/\D/.exec(value))) {
          setFilters({ ...filters, [name]: value })
        }
      } else {
        setFilters({ ...filters, [name]: newValue[0] })
      }
    } else {
      setFilters({ ...filters, [name]: value })
    }
  };

  return (
    <React.Fragment>

      {showLogin && <Login />}
      {showRegister && <Login />}
      {showUserRegistered && <Login />}

       {<Profile/>} 


      {/* <form className="filter-form" onSubmit={onSubmit}>

        <Grid container alignItems='center' justify='center' spacing={3}>

          <Grid item xs={10} sm={2}>
            <TextField
              label="Name"
              value={filters.nombre}
              name="nombre"
              onChange={onInputChange}
              fullWidth
            />
          </Grid>

          <Grid item xs={10} sm={2}>
            <TextField
              label="Price (min-max)"
              value={filters.precio}
              name="precio"
              onChange={onInputChange}
              fullWidth
            />
          </Grid>

          <Grid item xs={10} sm={2}>
            <FormControl fullWidth>
              <InputLabel >Tags</InputLabel>
              <Select

                label="Tag"
                value={filters.tags}
                name="tags"
                onChange={onInputChange}
              >
                <MenuItem value='' > <em>None</em> </MenuItem>
                {tagList.map(tag => (
                  <MenuItem key={tag} value={tag} >
                    {tag}
                  </MenuItem>
                ))}

              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={10} sm={2}>
            <FormControl fullWidth >
              <InputLabel >Type</InputLabel>
              <Select
                label="Type"
                value={filters.venta}
                name="venta"
                onChange={onInputChange}
              >
                <MenuItem value='' > <em>None</em> </MenuItem>
                {type.map(venta => (
                  <MenuItem key={venta} value={venta} >
                    {venta}
                  </MenuItem>
                ))}
              </Select>
            </FormControl >
          </Grid>

          <Grid item xs={10} sm={2}>
            <Box textAlign="center">
              <Button
                variant="contained"
                color="primary"
                type='submit'

              >
                {t('filtering')}

              </Button>
            </Box>
          </Grid>
        </Grid>

        <Button onClick={() => { i18n.changeLanguage("es") }}>Traduce a español</Button>

      </form> */}

      {isFetching && <Loading className="app-loading" />}
      {error && <Error className="app-error" error={error} />}

      {
        !isFetching
        &&
        adverts
        &&
        !adverts.length
        &&
        <h2>No hay anuncios. Pruebe otra búsqueda por favor.</h2>
      }

      {
        adverts
        &&
        adverts.length !== 0
        &&

        <Pagination
          totalAdverts={adverts.length}
          numberPerPage='3'
          adverts={adverts}
          disableUpdate={disableUpdate}
          update={update}
        >

        </Pagination>
      }

    </React.Fragment>
  );
}
