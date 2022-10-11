import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) throw new Error("Você deve definir uma uri");


let cached = global.mongoose;

if (!cached)     cached = global.mongoose = {conn: null, promise: null};

async function mongoConnect() {
    if (cached.conn) return cached.conn;
    
    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGODB_URI).then(mongoose => { return mongoose });
    }

    return cached.conn = cached.conn = await cached.promise;
}

export default mongoConnect