//Write your code here

const attendee = {
  attendeeId: "T001",
  name: "Alice Smith",
  event: "JavaScript Conference",
  ticketType: "VIP",
  ticketPrice: 150.00
}
// Log the name of the attendee
function logAttendeeName(attendee) {
  console.log(attendee.name)
}
// Log the ticket price of the attendee
function logTicketPrice(attendee) {
  console.log(attendee.ticketPrice)
}
// Update the ticket type of the attendee
function updateTicketType(attendee, newType) {
  attendee.ticketType = newType
}
// Update the ticket price of the attendee
function updateTicketPrice(attendee, newPrice) {
  attendee.ticketPrice = newPrice
}
// Remove the event property from the attendee object
function removeEventProperty(attendee) {
  delete attendee.event
}
// Indicate if the attendee has checked in property
function addCheckedInProperty(attendee) {
  attendee.checkedIn = true
}


//Needed for the tests to work. Don't modify
module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
};