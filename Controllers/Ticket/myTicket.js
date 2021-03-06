const { User } = require("../../Models/User");
const { Ticket } = require("../../Models/Ticket");

const moment = require("moment");

exports.myTicket = async function(req, res, next) {
  //Fetch ticket ID from user collection
  const user = await User.find({ _id: req.user._id }).select("ticket -_id");

  //Map on ID
  const ticketId = user.map(id => {
    return id.ticket;
  });

  //Fetch ticket from ticket collection
  const ticket = await Ticket.findOne({ _id: ticketId });

  //Formatting date when retrieves only
  const formattedStartDate = moment(ticket.startDate).format("MMMM Do YYYY");
  const formattedEndDate = moment(ticket.endDate).format("MMMM Do YYYY");

  //Sending these formatted data to user
  const ticketData = [
    { status: ticket.isActive },
    { "First name": ticket.firstName },
    { "Last name": ticket.lastName },
    { Phone: ticket.phone },
    { "Check in date": formattedStartDate },
    { "Check out date": formattedEndDate }
  ];

  res.send(ticketData);
};
