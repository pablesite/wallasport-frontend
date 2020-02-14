import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import Profile from '../Profile';
import Footer from '../Footer';
import { useTranslation } from 'react-i18next';
import T from 'prop-types';

import Loading from '../Loading';
import Error from '../Error';

import FormEnhanced from '../FormEnhanced'
import InputEnhanced from '../InputEnhanced'

import slugify from 'react-slugify';


import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Avatar from '@material-ui/core/Avatar';
import { mdiArrowLeftThick } from '@mdi/js';
import Icon from '@mdi/react';
import Input from '@material-ui/core/Input';


import { makeStyles } from '@material-ui/core/styles';
import { theme } from '../../styles';
import { styles } from './styles';



const useStyles = makeStyles(styles);



const types = [
  'buy',
  'sale',
];


export default function CreateOrUpdate(props) {


  // componentDidMount() {
  //   const { checkUser, history } = this.props;

  //   // if (checkUser.exist) {
  //     this.checkCreateorUpdate();
  //   // } else {
  //   //   history.push("/login");
  //   // }
  // }


  // componentDidUpdate() {
  //   const { update } = this.state;

  //   if (!this.props.match.params.id && update) {
  //     this.setState({
  //       advert: {
  //         description: '',
  //         nombre: '',
  //         foto: '',
  //         precio: '',
  //         tags: [],
  //         venta: '',
  //         _id: null,

  //       },
  //       update: false
  //     })
  //   }
  // }


  // createOrUpdateAdvert = () => {
  //   const { _id } = this.state.advert;

  //   if (_id) {
  //     this.props.updateAdvert(this.state.advert, _id).then(() => { this.props.history.push(`/detail/${_id}`) });
  //   } else {
  //     this.props.createAdvert(this.state.advert).then(() => { this.props.history.push(`/home/`) });
  //   }
  // }


  // checkCreateorUpdate() {
  //   // Tenemos el ID del path param ? Sí: Pues es un update: No: Pues es un create
  //   const advertID = this.props.match.params.id;

  //   if (advertID) {
  //     getOneAdvert(advertID).then(advert => {
  //       if (advert.success === false) {
  //         this.props.history.push("/404");
  //       } else {
  //         this.setState({ advert });
  //       }
  //     })
  //   } else {
  //     this.setState({
  //       advert: {
  //         description: '',
  //         nombre: '',
  //         foto: '',
  //         precio: '',
  //         tags: [],
  //         venta: '',
  //         _id: null

  //       },
  //       update: true,
  //     });
  //   }
  // }

  // onSubmit = (event) => {
  //   event && event.preventDefault();
  //   this.createOrUpdateAdvert();
  //   this.setState({ update: true });
  // }

  // goToHome() {
  //   this.props.history.push('/home');
  // }




  const { isFetching, error, adverts, showList, showLogin, showRegister, createAdvert, updateAdvert, showCreateAdvert, getOneAdvert, showUserRegistered, goApp, getAdverts,  tagList, advertToEdit, user } = props;

  const [t, i18n] = useTranslation();

  const [advert, setAdvert] = useState()
  const [photo, setPhoto] = useState()

  const style = useStyles();



  let initialState = {
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

  useEffect(() => {

    if (advert && showCreateAdvert) {
      advert.slugName = slugify(advert.name);
      if (photo) {
        createAdvert({ ...advert, photo }, user.token)
      } else {
        createAdvert({ ...advert }, user.token)
      }

      // goToHome()
    }

    if (advert && !showCreateAdvert) {
      if (photo) {
        updateAdvert({ ...advert, photo }, user.token)
      } else {
        updateAdvert({ ...advert }, user.token)
      }
      getOneAdvert(advert.slugName);
    }

  }, [advert, photo]);



  const onFileSelected = event => {
    setPhoto(event.target.files[0])
  }


  const onSubmit = (advert) => {

    setAdvert({
      ...advert,
      price: parseInt(advert.price, 10),
      type: advert.type === 'sale' ? true : false,
      userOwner: user.username, //userOwner es undefined!
      reserved: false,
      sold: false,
    })


    // if (showLogin) {
    //     login(user);
    // } else {
    //     register(user);
    // }
  };


  return (
    <React.Fragment>

      <Profile />

      <Container
        classes={{
          root: style.root,
        }}
        component="main"
        maxWidth="sm"
      >

        <div className={style.loginArrow}>
          <Link
            to='/'
            onClick={() => {
              showList();
            }} >
            <Icon
              path={mdiArrowLeftThick}
              size={1}
              horizontal
              rotate={180}
              color={theme.palette.primary.main}
            />
          </Link>
        </div>


        <Typography className={style.header} component="h1" variant="h6">
          {showCreateAdvert && t('CreateAdvert')}
          {!showCreateAdvert && t('UpdateAdvert')}
        </Typography>

        <p></p>


        {isFetching && <Loading />}

        <FormEnhanced
          handleSubmit={onSubmit}
          initialState={
            !showCreateAdvert ? { ...advertToEdit, price: parseInt(advertToEdit.price), type: advertToEdit.type ? 'sale' : 'buy' } : initialState
          }
        >
          <Grid container justify="center" spacing={2}>

            <Grid item xs={12}>
              <InputEnhanced
                type='text'
                name='name'
                selectValues={null}
                component={TextField}
                fullWidth
                variant="outlined"
                required />
            </Grid>



            <Grid item xs={12}>
              <InputEnhanced
                type='text'
                name='description'
                selectValues={null}
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
                  selectValues={types}
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
                  selectValues={tagList}
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
                selectValues={null}
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
                onChange={onFileSelected}


              />

              <label htmlFor="raised-button-file">
                <Button
                  className={style.buttonUpload}
                  component="span"
                  fullWidth
                  variant="outlined"
                  color="primary"
                  size="medium"
                >
                  Upload an image
                </Button>
              </label>

            </Grid>


            <Typography className={style.createTypography} variant="body2" color="inherit" >
              {photo !== undefined && photo !== null && `The photo entered has the name: ${photo.name}`}
            </Typography>


            {/* <div className={style.loginSubmit}> */}
            <Grid item xs={12}>
              <Button
                label="Continue"
                type='submit'
                variant="contained"
                color="primary"
                fullWidth
              >
                {t('CreateAdvert')}
                {/* {showRegister && t('RegisterButton')} */}
              </Button>
            </Grid>
            {/* </div> */}


            {error && <Error error={error} />}
          </Grid>
        </FormEnhanced>

      </Container>

      <Footer />

    </React.Fragment>
  );
}
