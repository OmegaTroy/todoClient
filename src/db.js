import mongoose from 'mongoose';

function connectDB(){
  try{
    mongoose.connect('mongodb+srv://julimjoi44:mKhepSqdWrhZL0xN@omegatroy.e4nsfx4.mongodb.net/')
    console.log('Connected to database')
  }catch(err){
    console.log(err)
  }
}


export default connectDB;