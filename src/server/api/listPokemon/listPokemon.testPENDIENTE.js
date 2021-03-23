import fetch from 'node-fetch';
jest.mock('node-fetch');
import pokemon from './listPokemonPENDIENTE.js';

describe('Testing listpokemon', () => {


    it('Should map respond', async () => {

        const req = { params: { id: 'test' } };

        const resJSON1 = {
            results: [{
                url: 'url'
            }]
        }

        const resJSON2 = [{
            name: 'name',
            sprites: {
                other: {
                    dream_world: {
                        front_default: "img"
                    }
                }
            },
            id: "id"
        }]


        fetch.mockResolvedValueOnce({ json: () => Promise.resolve(resJSON1) });
        fetch.mockResolvedValueOnce({ json: () => Promise.resolve(resJSON2) });


        const res = { json: jest.fn() };
        const next = jest.fn();

        await pokemon(req, res, next);

        expect(res.json).toHaveBeenCalledWith({});

    });

});