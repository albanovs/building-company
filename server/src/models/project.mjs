import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
    photo: String,
    projectName: String,
    price: String,
    area: String,
    parameters: String,
    description: String
});

const Project = mongoose.model('project', projectSchema);

export default Project;