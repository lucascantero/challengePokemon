import React from 'react';
import i18n from 'i18next'
import { useTranslation } from 'react-i18next';

const ButtonLanguage = () => {

    const { t } = useTranslation();

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

export default ButtonLanguage;