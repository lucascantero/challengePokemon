import React from 'react';
import { useTranslation, withTranslation } from 'react-i18next';

const ButtonLanguage = () => {

    const { t, i18n } = useTranslation();

    const changeLanguage = ln => {
        return () => {
            i18n.changeLanguage(ln)
        }
    }

    return (
        <div className="buttonLanguage__wrapper">
            <button className="buttonLanguage__button" onClick = {changeLanguage('en')}>{t('en')}</button>
            <button className="buttonLanguage__button" onClick = {changeLanguage('es')}>{t('es')}</button>
        </div>
    ) 

}

export default withTranslation()(ButtonLanguage);