import React from 'react';
import Home from './Home.jsx';
import { act } from 'react-dom/test-utils';
import { render, unmountComponentAtNode } from 'react-dom';
import { MemoryRouter } from 'react-router-dom';


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
            return render(<MemoryRouter> <Home /> </MemoryRouter>, container);
        });

        expect(container.innerHTML).toMatchSnapshot();
    })
})