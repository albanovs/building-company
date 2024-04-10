import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
    projectName: String,
    photo: String,
    price: Number,
    description: String,
    area: String,
    parameters: String,
    description: String
});

const User = mongoose.model('project', projectSchema);

export default User;