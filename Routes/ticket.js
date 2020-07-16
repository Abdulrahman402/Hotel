const express = require("express");

const router = express.Router();

// Authentication and Authorization Middleware function
const auth = require("../Middlewares/auth");
const isVerefied = require("../Middlewares/isVerefied");

// Routes controller functions path
const addTicket = require("../Controllers/Ticket/addTicket");
const myTicket = require("../Controllers/Ticket/myTicket");
const deleteTicket = require("../Controllers/Ticket/deleteTicket");

router.post("/addTicket/:id", auth, isVerefied, addTicket.addTicket);

router.get("/myTicket", auth, isVerefied, myTicket.myTicket);

router.delete("/deleteTicket/:id", auth, isVerefied, deleteTicket.deleteTicket);

module.exports = router;
