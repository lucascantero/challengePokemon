import fetch from 'node-fetch';

const pokemon = async (req, res,next) => {

    try {

        let url = `https://pokeapi.co/api/v2/pokemon/${req.params.id}`

        const response = await fetch(url);
        const data = await response.json();

        let abilities = data.abilities.map(item => {
            return item.ability.name
        })

        let dataResult =
        {
            name: data.name,
            img: data.sprites.other.dream_world.front_default,
            id: data.id,
            abilities
        }

        res.json(dataResult)
    }
    catch (err) {
        next(err)
    }
}

export default pokemon;