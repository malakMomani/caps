'use strict';

require('dotenv').config();

const events = require('./events.js');
const faker = require('faker');

require('./models/driver/driver.js');
require('./models/vendor/vendor.js');

const storeName = process.env.STORE_NAME;

setInterval(()=> {
  let order = {
    storeName: storeName,
    orderId: faker.datatype.uuid(),
    customerName: `${faker.name.firstName()} ${faker.name.lastName()}`,
    address: `${faker.address.cityName()}, ${faker.address.streetName()}`
  }
  events.emit('pickup', order);

  setTimeout(()=> {
    events.emit('in-transit',order);
  }, 1000);

  setTimeout(()=> {
    events.emit('delivered',order);
  }, 3000);

}, 5000);


