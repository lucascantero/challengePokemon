import {Router} from 'express';
import renderControllers from '../controllers/renderControllers'
import listPokemon from '../api/listPokemon/listPokemon';
import pokemon from '../api/pokemon/pokemon'

const router = Router();

router.get('/api/pokemon', listPokemon);
router.get('/api/pokemon/:id', pokemon);
router.get('*', renderControllers);

module.exports = router;