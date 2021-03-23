import React from 'react';
import ButtonLanguage from './ButtonLanguage.jsx';
import { act } from 'react-dom/test-utils';
import {render,unmountComponentAtNode} from 'react-dom';

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
            render(<ButtonLanguage />, container)
        })

        expect(container.innerHTML).toMatchSnapshot();
    })

})