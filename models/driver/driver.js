'use strict';

const events = require('../../events.js');
const handler = require('./driver-handler.js');

events.on('in-transit',handler.inTransitHandler);
events.on('delivered',handler.deliveredHandler)