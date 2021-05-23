'use strict';

let dateToday = new Date();
let date = dateToday.getFullYear()+'-'+(dateToday.getMonth()+1)+'-'+dateToday.getDate();

let timeNow = new Date();
let time = timeNow.getHours() + ":" + timeNow.getMinutes() + ":" + timeNow.getSeconds();

function handlePickup(payload) {
  console.log(`EVENT { event: pickup,
  time: ${date} ${time},
  payload:
  { store: ${payload.storeName},
    orderID: ${payload.orderId},
    customer: ${payload.customerName},
    address: ${payload.address}}}`)
}

function handlerDelivered(payload) {
  console.log(`VENDOR: Thank you for delivering ${payload.orderId}`);
}

module.exports = {
  handlePickup,
  handlerDelivered
};