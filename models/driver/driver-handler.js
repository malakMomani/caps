'user strict';

let dateToday = new Date();
let date = dateToday.getFullYear()+'-'+(dateToday.getMonth()+1)+'-'+dateToday.getDate();

let timeNow = new Date();
let time = timeNow.getHours() + ":" + timeNow.getMinutes() + ":" + timeNow.getSeconds();

function inTransitHandler(payload) {
  console.log(`DRIVER: pickedup ${payload.orderId}`);
  console.log(`EVENT { event: in-transit,
  time: ${date} ${time},
  payload:
  { store: ${payload.storeName},
    orderID: ${payload.orderId},
    customer: ${payload.customerName},
    address: ${payload.address}}}`)
}
function deliveredHandler(payload) {
  console.log(`DRIVER: delivered up ${payload.orderId}`);
  console.log(`EVENT { event: delivered,
  time: ${Date.now()},
  payload:
  { store: ${payload.storeName},
    orderID: ${payload.orderId},
    customer: ${payload.customerName},
    address: ${payload.address}}}`);
}

module.exports = {
  inTransitHandler,
  deliveredHandler
};
