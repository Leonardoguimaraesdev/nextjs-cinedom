import mongoose from "mongoose";

mongoose.set('strictQuery', true)

const url = process.env.MONGO_URL

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