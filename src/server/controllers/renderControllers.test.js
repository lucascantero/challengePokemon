import renderControllers from './renderControllers.js';

describe('Testing renderControllers', () => {

    it('Should match snapshot', () => {
        
        const req = {url: '/'};
        const res = {send: jest.fn()};
        const next = jest.fn();

        renderControllers(req,res,next);

        const html = res.send.mock.calls[0][0];

        expect(html).toMatchSnapshot(); 

    });

});