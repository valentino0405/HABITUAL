import mongoose from "mongoose";

export const Connection = async (username,password) => {
  const URL = `mongodb+srv://${username}:${password}@healthify.0guz1.mongodb.net/?retryWrites=true&w=majority&appName=HEALTHIFY`;

  try {
    await mongoose.connect(URL);
    console.log('Database connected successfully'); 
  } catch (error) {
    console.error('Error while connecting with the database', error.message); 
 
  }
};

export default Connection;