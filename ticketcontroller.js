const Ticket = require('../models/Ticket');

const createTicket = async (req, res) => {
  const { title, description } = req.body;
  const ticket = await Ticket.create({ title, description, createdBy: req.user.id });
  res.status(201).json(ticket);
};

const getTickets = async (req, res) => {
  const tickets = await Ticket.find({ createdBy: req.user.id });
  res.json(tickets);
};

module.exports = { createTicket, getTickets };
