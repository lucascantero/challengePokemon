import fetch from 'node-fetch';

const listPokemon = async (req, res, next) => {

    try {

        const url = `https://pokeapi.co/api/v2/pokemon?limit=5&offset=${req.query.offset}`;

        const response = await fetch(url);
        const data = await response.json();

        let arrPokemon = await Promise.all(data.results.map(async item => {

            let test = await fetch(item.url)
            let dataFinal = await test.json();
            return dataFinal
        }));

        let dataResult = arrPokemon.map(item => {
            return {
                name: item.name,
                img: item.sprites.other.dream_world.front_default,
                id: item.id
            }
        })

        res.json(dataResult);
    }
    catch (err) {
        next(err);
    }
}

module.exports = listPokemon;
