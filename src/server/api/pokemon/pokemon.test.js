import fetch from 'node-fetch';
jest.mock('node-fetch');
import pokemon from './pokemon.js';

describe('Testing pokemon', () => {


    it('Should map respond', async () => {

        const req = { params: { id: 'test' } };

        const resJSON1 = {
            name: 'Name',
            sprites: {
                other: {
                    dream_world: {
                        front_default: "img"
                    }
                }
            },
            id: "id",
            abilities: [{ ability: { name: "Ability" } }]
        }


        const resJSON2 = {
            flavor_text_entries: [{ flavor_text: 'description' }]
        }

        fetch.mockResolvedValueOnce({ json: () => Promise.resolve(resJSON1) });
        fetch.mockResolvedValueOnce({ json: () => Promise.resolve(resJSON2) });

        const res = { json: jest.fn() };
        const next = jest.fn();

        await pokemon(req, res, next);

        expect(res.json).toHaveBeenCalledWith({
            "abilities": [
                "Ability",
            ],
            "description": "description",
            "id": "id",
            "img": "img",
            "name": "Name",
        });

    });

});