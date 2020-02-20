import React from 'react';
import { useTranslation } from 'react-i18next';

import { makeStyles } from '@material-ui/core/styles';
import { styles } from './styles';

const useStyles = makeStyles(styles);

export function APIUnavailable() {

    const [t] = useTranslation();
    const style = useStyles();

    return (
        <div className={style.apiUnavailable}>
            {t('API_Unavailable')}
      </div>

    );
}
