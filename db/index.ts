import mongoose from "mongoose";

export default async () => {
    if (mongoose.connection.readyState >= 1) return;

    return mongoose.connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    });
};
