import React from 'react';
import { useTranslation } from 'react-i18next';
import T from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import { styles } from './styles';


const useStyles = makeStyles(styles);


export default function Error(props) {

  const [t] = useTranslation();
  const style = useStyles();
  
    // Origin props of the component
    const { error } = props;

  return (
    
    <div className={style.errorError}>
      {t('General_error')}
      <br></br>
      <strong className={style.errorMessage}>{error.message}</strong>
    </div>
    
  );
}

Error.propTypes = {
  error: T.objectOf(Error).isRequired,
};
