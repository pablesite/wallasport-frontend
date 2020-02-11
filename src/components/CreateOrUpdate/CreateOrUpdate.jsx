import React, { useState, useEffect } from 'react';

import Profile from '../Profile';
import Footer from '../Footer';
import { useTranslation } from 'react-i18next';
import T from 'prop-types';

import Loading from '../Loading';
import Error from '../Error';

import FormEnhanced from '../FormEnhanced'
import InputEnhanced from '../InputEnhanced'


import { getOneAdvert } from "../../services/AdvertDBService";

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { makeStyles } from '@material-ui/core/styles';
import { theme } from '../../styles';
import { styles } from './styles';



 const useStyles = makeStyles(styles);



const types = [
  'buy',
  'sale',
];


export default function CreateOrUpdate(props) {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     advert: {
  //       description: '',
  //       nombre: '',
  //       foto: '',
  //       precio: '',
  //       tags: [],
  //       venta: '',
  //       _id: null
  //     },
  //     update: true,

  //   };

  //   this.checkCreateorUpdate = this.checkCreateorUpdate.bind(this);
  //   this.goHome = this.goHome.bind(this);

  // };


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

  // goHome() {
  //   this.props.history.push('/home');
  // }

  // onInputChange = (event) => {
  //   const { name, value } = event.target;

  //   if (name === 'precio') {

  //     if ((!/\D/.exec(value))) {
  //       this.setState(({ advert }) => ({
  //         advert: {
  //           ...advert,
  //           [name]: value
  //         }
  //       }));

  //     }
  //   } else {
  //     this.setState(({ advert }) => ({

  //       advert: {
  //         ...advert,
  //         [name]: value
  //       }
  //     }));
  //   }
  // };




    //const value = event.target.files[0].name;
    // this.setState(({ advert }) => ({
    //   advert: {
    //     ...advert,
    //     //photo: value,
    //     foto: 'noPhoto' //This functionality is deactivated while APi has not an endpoint to upload files.
    //   }
    // }));



  // const { user, tagList } = props;
  const { isFetching, error, adverts, showLogin, showRegister, createAdvert, tagList } = props;

  const [t, i18n] = useTranslation();

  const [advert, setAdvert] = useState()
  const [photo, setPhoto] = useState()

  const style = useStyles();

  

  useEffect(() => {
     if (advert && photo) {
      console.log('Renderiz! ', { ...advert,  photo})
       createAdvert({ ...advert,  photo})

     }
  },[advert, photo]);


  const initialState = { 
    userOwner: '',
    name: '',
    description: '',
    photo: '',
    type: '',
    price: '',
    tags: [],
    reserved: '',
    sold: '',
  
  };

  const onFileSelected = event => {
    // console.log( event.target.files[0])
    setPhoto( 
       event.target.files[0] 
    )

  }


  const onSubmit = (advert) => {

    setAdvert({
      ...advert,
      price: parseInt(advert.price, 10),
      type: advert.type==='sale' ? true : false,
      userOwner: 'pablesite',
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
        maxWidth="xs"
      >

        {isFetching && <Loading />}

        <FormEnhanced
          handleSubmit={onSubmit}
          initialState={initialState}
        >
          <Grid container spacing={2}>

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
                variant="outlined"
                required />
            </Grid>


            <Grid item xs={12}>
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


            <Grid item xs={12}>
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


            <Grid item xs={12}>
              <InputEnhanced
                type='number'
                name='price'
                selectValues={null}
                component={TextField}
                fullWidth
                variant="outlined"
                required />
            </Grid>

            <Grid item xs={12}>
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
                >
                  Upload an image
                </Button>
              </label>
              
                <Typography variant="body2" color="inherit" >
                  {photo !== null && `The photo entered has the name: ${photo}`}
                </Typography>
       

            </Grid>

          </Grid>

       
  
  
          <div className={style.loginSubmit}>
            <Button
              label="Continue"
              type='submit'
              variant="contained"
              color="primary"
            >
              {t('CreateAdvert')}
              {/* {showRegister && t('RegisterButton')} */}
            </Button>
          </div>


          {error && <Error error={error} />}

        </FormEnhanced>

      </Container>

      <Footer />



      {/* <Container component="main" maxWidth="xs">
        <CssBaseline />

        <div className='paper'>

          <Typography component="h1" variant="h5">
            New Advert
                        </Typography>

          <form className='form' onSubmit={this.onSubmit}>
            <Grid container justify="center" spacing={2}>



              <Grid item xs={12} >
                <input
                  accept="image/*"
                  style={{ display: 'none' }}
                  id="raised-button-file"
                  multiple
                  type="file"
                  onChange={this.onFileSelected}

                />
                <label htmlFor="raised-button-file">
                  <Button
                    component="span"
                    fullWidth
                    variant="outlined"
                    color="primary"
                  >
                    Upload an image
                </Button>
                </label>
                <Box textAlign="justify">
                  <h3>The photo entered has the name: {foto}.
                    Attention: This functionality is disabled because the API does not have an endpoint to upload photos.</h3>
                </Box>

              </Grid>

              <Grid item xs={12} >
                <Button
                  label="Create"
                  type='submit'
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  {_id ? 'Update advert' : 'Create a new advert'}
                </Button>
              </Grid>

              <div className="back-home">
                <Grid item xs={12} >
                  <Button variant="contained"
                    color="secondary"
                    className="button is-link"
                    onClick={this.goHome}
                  >
                    Back to home
                </Button>
                </Grid>
              </div>
            </Grid>
          </form>

        </div>

      </Container> */}



    </React.Fragment>
  );
}
