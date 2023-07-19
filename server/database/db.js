import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

export const Connection = () => {

    const MONGODB_URI = 'mongodb+srv://falafilm:falafilm@todolist.jvhx7x0.mongodb.net/?retryWrites=true&w=majority';

    mongoose.connect(MONGODB_URI, {useNewUrlParser: true});

    mongoose.connection.on('connected', () =>{
        console.log('Database Coneected!');
    })

    mongoose.connection.on('disconnected!', () => {
        console.log('Database Disconnected!');
    })

    mongoose.connection.on('error', () =>{
        console.log('Database Error!', error.message);
    })
}

export default Connection;