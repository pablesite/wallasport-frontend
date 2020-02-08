

import React from 'react';
import { Link } from 'react-router-dom'
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


// Hay que importar un json de estilos!. Nunca importar ya los estilos hechos porque entonces se están haciendo en el import, y cuando renderiza el componente se sobreescriben los del componente.
// Hacer un css por cada componente pero de tipo js, que sólo contengael json. De momento lo voy a hacer todo en styles y si veo que no se repite nada, entonces lo divido
import { makeStyles } from '@material-ui/core/styles';
import { theme } from '../../styles';
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
  const { user, logout, goLogin, goRegister } = props;

  const [t, i18n] = useTranslation();
  const style = useStyles();

  const changeStyleToEnglish = () => {
    let spanishChange = document.getElementById("spanish-change");
    let englishChange = document.getElementById("english-change");

    if (englishChange.className == style.profileTranslate) {
      englishChange.className = style.profileTranslateDark;
      spanishChange.className = style.profileTranslate;
      return;
    }
  }

  const changeStyleToSpanish = () => {
    let spanishChange = document.getElementById("spanish-change");
    let englishChange = document.getElementById("english-change");

    if (spanishChange.className == style.profileTranslate) {
      spanishChange.className = style.profileTranslateDark;
      englishChange.className = style.profileTranslate;
      return;
    }

  }


  return (
    <React.Fragment>

      <div className={style.profileRoot}>
        <AppBar color='inherit' position="static">


          <Toolbar className={style.profileToolbar}>

            <Grid container
              direction="row"
              justify="space-between"
              alignItems="center" >

              <Grid item className={style.profileItemsLeft}>
                <Link to='/'>
                  <HomeIcon className={style.profileHomeIcon} fontSize="large" />
                </Link>
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
                <Input className={style.littleText}
                  id="standard-full-width"
                  size='small'
                  style={{ margin: 8 }}
                  placeholder={t("SearchProduct")}
                  fullWidth
                  color='secondary'
                  startAdornment={<Icon path={mdiMagnify}
                    size={1}
                    horizontal
                    rotate={90}
                    color={theme.palette.primary.main}
                  />}
                />
              </Grid>


              {(user.username === null) &&
                <Grid item item className={style.profileItemsRight}>
                  <Button
                    // classes={{
                    //   root: style.profileButton
                    // }}
                    className={style.profileButton}
                    size="small"
                    variant="outlined"
                    color="primary"
                    onClick={() => goLogin()}
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
                    onClick={() => goRegister()}>
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
                    className={style.profileButton}
                    size="small"
                    variant="outlined"
                    color="primary"
                    onClick={() => logout()}
                  >
                    {t('Logout')}
                  </Button>
                </Grid>}

              {(user.username !== null) &&
                <Grid item className={style.profileItemsRight}>
                  {/* <Link to='/createOrUpdate/'>Upload new product</Link> */}
                  {<Button
                    className={style.profileButton}
                    size="small"
                    variant="contained"
                    color="primary"
                    onClick={1}>
                    {t('CreateProduct')}
                  </Button>}
                </Grid>}

            </Grid>

          </Toolbar>
        </AppBar>

      </div>

    </React.Fragment>
  );

}

Profile.propTypes = {
  user: T.object,
  logout: T.func,
  goLogin: T.func,
  goRegister: T.func,

};
