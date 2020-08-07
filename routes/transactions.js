const express = require('express');
const router = express.Router();
const {getTransactions,addTransaction, deleteTransaction} = require('../controllers/transactions');
const auth = require('../middleware/auth');



router.route('/', auth).get(getTransactions);
router.route('/', auth).post(addTransaction);
router.route('/:id', auth).delete(deleteTransaction);





module.exports = router;