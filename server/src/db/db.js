import mongoose from 'mongoose';

export const connect = async () => {
    try {
        await mongoose.connect(
            'mongodb+srv://albvnovsdev:SzUmBSzwLtQI1ClI@cluster0.0zlf63j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0&connectTimeoutMS=60000&socketTimeoutMS=60000'
        );
        console.log('DB connected');
    } catch (error) {
        console.error('DB connection error', error);
    }
}
