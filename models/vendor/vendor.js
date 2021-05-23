'use strict';

const events = require('../../events.js');
const handlers = require('./vendor-handler.js');

events.on('pickup',handlers.handlePickup);
events.on('delivered',handlers.handlerDelivered);

