import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'
import slugify from 'react-slugify';
import T from 'prop-types';

import Profile from '../Profile';
import Footer from '../Footer';
import Loading from '../Loading';
import Error from '../Error';
import FormEnhanced from '../FormEnhanced'
import InputEnhanced from '../InputEnhanced'

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { mdiArrowLeftThick } from '@mdi/js';
import Icon from '@mdi/react';

import { makeStyles } from '@material-ui/core/styles';
import { theme } from '../styles';
import { styles } from './styles';


const useStyles = makeStyles(styles);


export default function CreateOrUpdate(props) {

  const style = useStyles();
  const [t] = useTranslation();


  // State of store
  const {
    user,                //user
    advertToEdit,        //adverts
    tagList,             //tags
    isFetching, error,   //ui
    showCreateAdvert     //appSelectors
  } = props;


  // Actions of the store
  const { goToAdvertDetail, createAdvert, updateAdvert, showListAction, goToHome } = props;


  const types = ['buy', 'sale'];

  const initialState = {
    userOwner: '',
    name: '',
    slugName: '',
    description: '',
    photo: '',
    type: '',
    price: '',
    tags: [],
    reserved: '',
    sold: '',
  };


  const [advert, setAdvert] = useState();
  const [photo, setPhoto] = useState();


  useEffect(() => {
    if (advert) {
      if (showCreateAdvert) {
        advert.slugName = slugify(advert.name);
        if (photo) { createAdvert({ ...advert, photo }, user.token) }
        else { createAdvert({ ...advert }, user.token) }
        goToHome();
      }
      if (!showCreateAdvert) {
        if (photo) { updateAdvert({ ...advert, photo }, user.token) }
        else { updateAdvert({ ...advert }, user.token) }
        goToAdvertDetail(advert.slugName);
      }
    }
  }, [advert, photo, createAdvert, goToAdvertDetail, showCreateAdvert, updateAdvert, user.token, goToHome]);

  // console.log('Usuario en CreateOrUpdate',user)
  console.log('Anuncio en CreateOrUpdate',advert)

  const onSubmit = (advert) => {
    setAdvert({
      ...advert,
      price: parseInt(advert.price, 10),
      type: advert.type === 'sale' ? true : false,
      userOwner: user._id,
      reserved: false,
      sold: false,
    })

  };


  return (
    <React.Fragment>

      <Profile />

      {isFetching && <Loading />}
      {error && <Error />}

      <Container
        classes={{
          root: style.createorUpdateRoot,
        }}
        component="main"
        maxWidth="sm"
      >

        <Link
          to='/'
          onClick={() => {
            showListAction();
          }} >
          <Icon
            path={mdiArrowLeftThick}
            size={1}
            horizontal
            rotate={180}
            color={theme.palette.primary.main}
          />
        </Link>

        <Typography className={style.createOrUpdateHeader} component="h1" variant="h6">
          {showCreateAdvert && t('CreateAdvert')}
          {!showCreateAdvert && t('UpdateAdvert')}
        </Typography>


        <FormEnhanced
          handleSubmit={onSubmit}
          initialState={!showCreateAdvert ? { ...advertToEdit, price: parseInt(advertToEdit.price), type: advertToEdit.type ? 'sale' : 'buy' } : initialState}
        >
          <Grid container justify="center" spacing={2}>

            <Grid item xs={12}>
              <InputEnhanced
                type='text'
                name='name'
                component={TextField}
                fullWidth
                variant="outlined"
                required />
            </Grid>

            <Grid item xs={12}>
              <InputEnhanced
                type='text'
                name='description'
                component={TextField}
                fullWidth
                multiline
                rows="5"
                variant="outlined"
                required />
            </Grid>

            <Grid item xs={6}>
              <FormControl variant="outlined" fullWidth >
                <InputEnhanced
                  type='text'
                  name='type'
                  selectvalues={types}
                  component={Select}
                  fullWidth
                  variant="outlined"
                  required />
              </FormControl>
            </Grid>

            <Grid item xs={6}>
              <FormControl variant="outlined" fullWidth >
                <InputEnhanced
                  type='text'
                  name='tags'
                  selectvalues={tagList}
                  component={Select}
                  fullWidth
                  variant="outlined"
                  required />
              </FormControl>
            </Grid>

            <Grid item xs={6}>
              <InputEnhanced
                type='text'
                name='price'
                component={TextField}
                fullWidth
                variant="outlined"
                required />
            </Grid>

            <Grid item xs={6}>
              <input
                accept="image/*"
                style={{ display: 'none' }}
                id="raised-button-file"
                multiple
                type="file"
                onChange={(e) => setPhoto(e.target.files[0])}
              />

              <label htmlFor="raised-button-file">
                <Button
                  className={style.createOrUpdateButtonUpload}
                  component="span"
                  fullWidth
                  variant="outlined"
                  color="primary"
                  size="medium"
                >
                  {t('UploadImage')}
                </Button>
              </label>

            </Grid>

            <Typography className={style.createOrUpdateCreateTypography} variant="body2" color="inherit" >
              {photo !== undefined && photo !== null && t('NameOfPhoto') + photo.name}
            </Typography>

            <Grid item xs={12}>
              <Button
                label="Continue"
                type='submit'
                variant="contained"
                color="primary"
                fullWidth
              >
                {t('CreateAdvert')}
              </Button>
            </Grid>

            {error && <Error error={error} />}
          </Grid>
        </FormEnhanced>

      </Container>

      <Footer />

    </React.Fragment>
  );
}

CreateOrUpdate.propTypes = {
  user: T.object,
  advertToEdit: T.object,
  tagList: T.array,
  isFetching: T.bool,
  error: T.objectOf(Error),
  showCreateAdvert: T.bool,
  goToAdvertDetail: T.func,
  createAdvert: T.func,
  updateAdvert: T.func,
  showListAction: T.func,
};

