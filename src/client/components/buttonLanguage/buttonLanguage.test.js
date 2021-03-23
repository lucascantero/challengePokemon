import React from 'react';
import ButtonLanguage from './ButtonLanguage.jsx';
import { act } from 'react-dom/test-utils';
import {render,unmountComponentAtNode} from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import i18next from '../../i18n/index';

describe('Testing ButtonLanguage', () => {

    let container = null;

    beforeEach(() => {
        container = document.createElement("div");
        document.body.appendChild(container);
    });

    afterEach(() => {
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    });

    it('Should match snapshot', () => {



        act(() => {
            render( <I18nextProvider i18n={i18next}> <ButtonLanguage /> </I18nextProvider>, container)
        })

        expect(container.innerHTML).toMatchSnapshot();
    })

})