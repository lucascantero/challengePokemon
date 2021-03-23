import fetch from 'node-fetch';

const pokemon = async (req, res,next) => {

    try {

        let urls = [
            `https://pokeapi.co/api/v2/pokemon/${req.params.id}`,
            `https://pokeapi.co/api/v2/pokemon-species/${req.params.id}`
        ]

        let requests = urls.map(url => fetch(url));

        const response = await Promise.all(requests);
        const data = await Promise.all([response[0].json(), response[1].json()]);

        let abilities = data[0].abilities.map(item => {
            return capitalize(item.ability.name)
        })

        function capitalize(word) {
            return word[0].toUpperCase() + word.slice(1);
        }

        let dataResult = {
            name: capitalize(data[0].name),
            img: data[0].sprites.other.dream_world.front_default,
            id: data[0].id,
            abilities,
            description: data[1].flavor_text_entries[0].flavor_text
        }

        res.json(dataResult)
    }
    catch (err) {
        next(err)
    }
}

export default pokemon;