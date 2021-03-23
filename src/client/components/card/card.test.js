import React from 'react';
import Card from './Card.jsx';
import { act } from 'react-dom/test-utils';
import {render,unmountComponentAtNode} from 'react-dom';
import { MemoryRouter } from 'react-router-dom';

describe('Testing Card', () => {

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
        
        let cardDate = {
            "id": "id",
            "name" :"name",
            "img": "img",
        }

        act(() => {
            render(<MemoryRouter> <Card dato={cardDate}/> </MemoryRouter>, container)
        })

        expect(container.innerHTML).toMatchSnapshot();
    })

})