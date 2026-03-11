const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/authMiddleware');

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
router.get('/dishes', getAllDishes);
router.get('/dishes/:id', getDishByID);

router.post('/chefs', protect, authorize('admin', 'manager'), createChef);
router.post('/dishes',  protect, authorize('admin', 'manager'), createDish);
router.put('/dishes/:id',  protect, authorize('admin', 'manager'), updateDish);
router.delete('/dishes/:id',  protect, authorize('admin', 'manager'), deleteDish);

module.exports = router;