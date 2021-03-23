import React from 'react';
import Header from './Header.jsx';
import { act } from 'react-dom/test-utils';
import {render,unmountComponentAtNode} from 'react-dom';


describe('Testing Header', () => {

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
            render(<Header t={key => key} />, container)
        })

        expect(container.innerHTML).toMatchSnapshot();
    })
})