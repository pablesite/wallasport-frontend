import React from 'react';
import { useTranslation } from 'react-i18next';
import T from 'prop-types';

import Login from '../Login';
import DeleteAlert from '../DeleteAlert';
import Profile from '../Profile';
import Footer from '../Footer';
import Loading from '../Loading';
import Error from '../Error';
import Filtering from '../Filtering'

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';

import { makeStyles } from '@material-ui/core/styles';
import { styles } from './styles';


const useStyles = makeStyles(styles);


export default function UserDetail(props) {

  const style = useStyles();
  const [t] = useTranslation();


  // State of store
  const {
    user,               //user
    isFetching, error,  //ui
    showUpdateUser,     //appSelectors
  } = props;

  // Actions of the store
  const { showUpdateUserAction } = props;


  return (
    <React.Fragment>

      {showUpdateUser && <Login />}

      <Profile />

      <Filtering />

      {isFetching && <Loading />}
      {error && <Error error={error} />}


      <div className={style.userDetailRoot} >

        < Grid
          container
          alignItems='center'
          justify="center"
        >

          <Grid item xs={3}>
            <Card className={style.userDetailCard}>

              <CardHeader
                classes={{
                  title: style.userDetailCardHeaderTitle,
                  root: style.userDetailCardHeaderRoot,
                }}
                title={t('WelcomePersonalInfo')}
              />

              <CardMedia
                className={style.userDetailMedia}
                image={user.photo !== '' ? `${process.env.REACT_APP_IMG_URL}/${user.photo}` : `${process.env.REACT_APP_IMG_URL}/no-photo.gif`}
                title={t('Username') + user.username}
              />

              <CardContent>

                <Typography variant="body2" color="textSecondary" component="p">
                  {t('Username')  + user.username}
                </Typography>

                <Typography variant="body2" color="textSecondary" component="p">
                  {t('Email')  + user.email}
                </Typography>

              </CardContent>

              <CardActions disableSpacing>

                <IconButton onClick={() => showUpdateUserAction(user)} >
                  <EditIcon />
                </IconButton>

                <DeleteAlert type='user' item={user.username} />

              </CardActions>

            </Card>
          </Grid>

        </Grid>
      </div>

      <Footer />

    </React.Fragment >
  )
}

UserDetail.propTypes = {
  user: T.object,
  isFetching: T.bool,
  error: T.objectOf(Error),
  showUpdateUser: T.bool,
  showUpdateUserAction: T.func,
};

