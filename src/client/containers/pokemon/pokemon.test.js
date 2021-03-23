import React from 'react';
import Pokemon from './Pokemon.jsx';
import { act } from 'react-dom/test-utils';
import { render, unmountComponentAtNode } from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18next from '../../i18n/index';

describe('Testing Pokemon', () => {

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

    it("Should match snapshot", async () => {

        const fakeUser = { 
                "name": "name",
                "id": "id",
                "description": "description",
                "abilities": ["abilities"],
                "img": "img"
        }

        global.fetch = jest.fn().mockImplementation
            (() =>
                Promise.resolve({
                    json: (() => Promise.resolve(fakeUser))
                })
            );

        await act(async () => {
            return render(<MemoryRouter> <I18nextProvider i18n={i18next}> <Pokemon /> </I18nextProvider> </MemoryRouter>, container);
        });

        expect(container.innerHTML).toMatchSnapshot();

    });

})