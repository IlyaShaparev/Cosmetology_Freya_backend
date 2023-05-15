const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
    {
        date: String,
        service: String,
        time: String,
    },
    {
        timestamps: true
    }
);
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;