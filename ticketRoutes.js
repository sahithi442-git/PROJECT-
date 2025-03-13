const express = require('express');
const { createTicket, getTickets } = require('../controllers/ticketController');
const auth = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', auth, createTicket);
router.get('/', auth, getTickets);

module.exports = router;
