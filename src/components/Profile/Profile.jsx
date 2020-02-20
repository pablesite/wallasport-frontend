

import React from 'react';
import { useTranslation } from 'react-i18next';
import T from 'prop-types';

import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import { mdiMagnify } from '@mdi/js';
import SvgIcon from '@material-ui/core/SvgIcon';
import Icon from '@mdi/react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Avatar from '@material-ui/core/Avatar';

import { makeStyles } from '@material-ui/core/styles';
import { theme } from '../styles';
import { styles } from './styles';


const useStyles = makeStyles(styles);


function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export default function Profile(props) {

  const [t, i18n] = useTranslation();
  const style = useStyles();

  // State of store
  const {
    user,     //user
  } = props;

  // Actions of the store
  const { showLoginAction, logout, showRegisterAction, getAdverts, goToHome, goToUserDetail, goToCreateAdvert, getFavsFromUser } = props;


  // translate utils
  const changeStyleToEnglish = () => {
    let spanishChange = document.getElementById("spanish-change");
    let englishChange = document.getElementById("english-change");

    if (englishChange.className === style.profileTranslate) {
      englishChange.className = style.profileTranslateDark;
      spanishChange.className = style.profileTranslate;
      return;
    }
  }

  const changeStyleToSpanish = () => {
    let spanishChange = document.getElementById("spanish-change");
    let englishChange = document.getElementById("english-change");

    if (spanishChange.className === style.profileTranslate) {
      spanishChange.className = style.profileTranslateDark;
      englishChange.className = style.profileTranslate;
      return;
    }

  }

  // menu utils
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = event => { setAnchorEl(event.currentTarget) };
  const handleClose = () => { setAnchorEl(null) };


  return (
    <React.Fragment>

      <AppBar color='inherit' position="static">

        <Toolbar className={style.profileToolbar}>

          <Grid container
            direction="row"
            justify="space-between"
            alignItems="center" >

            <Grid item className={style.profileItemsLeft}>
              <HomeIcon
                className={style.profileHomeIcon}
                fontSize="large"
                onClick={() => { goToHome(); getAdverts() }}
              />
            </Grid>

            <Grid item >
              <div id='spanish-change'
                className={style.profileTranslate}
                onClick={() => {
                  i18n.changeLanguage("es");
                  changeStyleToSpanish();
                }}
              >
                es
                </div>

              <div id='english-change'
                className={style.profileTranslateDark}
                onClick={() => {
                  i18n.changeLanguage("en");
                  changeStyleToEnglish();
                }}
              >
                en
                </div>
            </Grid>

            <Grid item xs={10} sm className={style.profileItemsLeft}>
              <Input className={style.proflieLittleText}
                id="standard-full-width"
                size='small'
                style={{ margin: 8 }}
                placeholder={t("SearchProduct")}
                fullWidth
                onChange={(e) => {
                  getAdverts(`name=${e.target.value}`)
                }}
                startAdornment={<Icon path={mdiMagnify}
                  size={1}
                  horizontal
                  rotate={90}
                  color={theme.palette.primary.main}
                />}
              />
            </Grid>


            {(user.username === null) &&
              <Grid item className={style.profileItemsRight}>
                <Button
                  className={style.profileButton}
                  size="small"
                  variant="outlined"
                  color="primary"
                  onClick={() => showLoginAction()}
                >
                  {t('LoginButton')}
                </Button>
              </Grid>}

            {(user.username === null) &&
              <Grid item className={style.profileItemsRight}>
                <Button
                  className={style.profileButton}
                  size="small"
                  variant="outlined"
                  color="primary"
                  onClick={() => showRegisterAction()}>
                  {t('RegisterButton')}
                </Button>
              </Grid>}

            {(user.username !== null) &&
              <Grid item className={style.profileItemsRight}>
                <Button
                  className={style.profileButton}
                  color="primary">
                  {t('Messages')}
                </Button>
              </Grid>}

            {(user.username !== null) &&
              <Grid item className={style.profileItemsRight}>
                <Button
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={handleClick}>

                  <Avatar
                    className={style.userAvatar}
                    src={user.photo ? `${process.env.REACT_APP_IMG_URL}/${user.photo}` : `${process.env.REACT_APP_IMG_URL}/no-photo.gif`}
                  />
                </Button>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem className={style.profileMenuItem} onClick={() => goToUserDetail()}>{t('MyAccount')}</MenuItem>
                  <MenuItem className={style.profileMenuItem} onClick={() => {getAdverts(`userOwner=${user._id}`); goToHome();}}>{t('MyProducts')}</MenuItem>
                  <MenuItem className={style.profileMenuItem} onClick={() => getFavsFromUser(user.username, user.token)}>{t('MyFavs')}</MenuItem>
                  <MenuItem className={style.profileMenuItem} onClick={() => {logout(); getAdverts(); } }>{t('Logout')}</MenuItem>
                </Menu>
              </Grid>}

            {(user.username !== null) &&
              <Grid item className={style.profileItemsRight}>
                <Button
                  className={style.profileButton}
                  size="small"
                  variant="contained"
                  color="primary"
                  onClick={() => goToCreateAdvert()}
                >
                  {t('CreateProduct')}
                </Button>
              </Grid>}

          </Grid>

        </Toolbar>
      </AppBar>

    </React.Fragment>
  );

}

Profile.propTypes = {
  user: T.object,
  showLoginAction: T.func,
  logout: T.func,
  showRegisterAction: T.func,
  getAdverts: T.func,
  goToHome: T.func,
  goToUserDetail: T.func,
  goToCreateAdvert: T.func,
};

