import React from 'react';
import T from 'prop-types';


import './styles.css';
import { useStyles } from '../../styles';
import { useTranslation } from 'react-i18next';


export default function Loading({ error }) {

  const style = useStyles();
  const [t] = useTranslation();

  return (
    
    <div className={style.errorError}>
      {t('General_error')}
      <br></br>
      <strong className={style.errorMessage}>{error.message}</strong>
    </div>
    
  );
}

Loading.propTypes = {
  error: T.instanceOf(Error).isRequired,
};
