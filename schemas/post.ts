import mongoose, { Document, Schema } from "mongoose";

export enum PostDocument {
    schemaName = "post",
    title = "title",
    body = "body",
}

export interface IPost extends Document {
    [PostDocument.body]?: string;
    [PostDocument.title]?: string;
}

const schema = new Schema(
    {
        [PostDocument.title]: {
            type: String,
            required: true,
        },

        [PostDocument.body]: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export default (mongoose.models[PostDocument.schemaName] as mongoose.Model<IPost>) || mongoose.model<IPost>(PostDocument.schemaName, schema);
