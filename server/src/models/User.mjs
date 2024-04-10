import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: String,
    name: String,
    password: Number,
});

const User = mongoose.model('users', userSchema);

export default User;