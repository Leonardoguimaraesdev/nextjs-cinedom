import mongoose from "mongoose";

mongoose.set('strictQuery', true)

const dbname = 'cinedom'
const url = `mongodb+srv://leonardoguimaraesdev:${process.env.MONGO_PWD}@cluster0.qsffpx9.mongodb.net/${dbname}?retryWrites=true&w=majority`

const connect = async () => {
    return await mongoose.connect(url)
}

const disconnect = async () => {
    return await mongoose.disconnect(url)
}

const database = {
    connect,
    disconnect
}

export default database