import React from 'react';
import Home from './Home.jsx';
import { act } from 'react-dom/test-utils';
import { render, unmountComponentAtNode } from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18next from '../../i18n/index';


describe('Testing Home', () => {

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

        const fakeUser = [{
            "name": "name",
            "id": "id",
            "img": "img"
        }]

        global.fetch = jest.fn().mockImplementation
            (() =>
                Promise.resolve({
                    json: (() => Promise.resolve(fakeUser))
                })
            );

        await act(async () => {
            return render(<MemoryRouter> <I18nextProvider i18n={i18next}> <Home /> </I18nextProvider></MemoryRouter>, container);
        });

        expect(container.innerHTML).toMatchSnapshot();
    })
})