const express = require('express');
const router = express.Router();

const {
    getAllDishes,
    createDish,
    getDishByID,
    updateDish,
    deleteDish,
} = require('../controllers/dishController');

const {
    getAllChefs,
    createChef,
} = require('../controllers/chefController');

router.get('/chefs', getAllChefs);
router.post('/chefs', createChef);

router.get('/dishes', getAllDishes);
router.post('/dishes', createDish);
router.get('/dishes/:id', getDishByID);
router.put('/dishes/:id', updateDish);
router.delete('/dishes/:id', deleteDish);

module.exports = router;