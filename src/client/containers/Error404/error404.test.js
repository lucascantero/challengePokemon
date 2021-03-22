import React from 'react';
import Error404 from './Error404.jsx';
import { act } from 'react-dom/test-utils';
import {render,unmountComponentAtNode} from 'react-dom';


describe('Testing Error 404', () => {

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
            render(<Error404 />, container)
        })

        expect(container.innerHTML).toMatchSnapshot();
    })
})