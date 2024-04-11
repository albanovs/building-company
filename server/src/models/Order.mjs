import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    client: String,
    projectName: String,
    price: Number,
    status: Boolean,
    num: String,
    data: String,
});

const Orders = mongoose.model('orders', orderSchema);

export default Orders;