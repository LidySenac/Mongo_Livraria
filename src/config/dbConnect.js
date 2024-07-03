import mongoose from "mongoose";

async function connectaNaDatabase() {

mongoose.connect("mongodb+srv://admin:admin123@cluster0.mxst4jf.mongodb.net/livraria?retryWrites=true&w=majority&appName=Cluster0")

 return mongoose.connection
}

export default connectaNaDatabase



