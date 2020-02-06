//Listo
import React from 'react';
import { useTranslation } from 'react-i18next';

import { useStyles } from '../styles';

export function APIUnavailable() {

    const [t] = useTranslation();

    const style = useStyles();

    return (
        <div className={style.apiUnavailable}>
            {t('API_Unavailable')}
      </div>

    );
}
