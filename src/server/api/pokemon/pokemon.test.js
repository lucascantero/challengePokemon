import fetch from 'node-fetch';

jest.mock('node-fetch');

import pokemon from './pokemon.js';

describe('Testing pokemon', () => {


    it('Should match snapshot', async () => {
        
        const req = {params: {id: 'test'}};

        const resJSON = {
            name: 'name',  
            img: 'img',  
            id: "id",  
            //abilities: ["ability1", "ability2"]
        }

        fetch.mockResolvedValueOnce({json: () => Promise.resolve(resJSON)});
        
        const res = {json: jest.fn()};

        await pokemon(req,res);

        expect(res.json).toHaveBeenCalledWith({});

    });

});