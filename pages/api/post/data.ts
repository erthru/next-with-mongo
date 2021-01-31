import { NextApiRequest, NextApiResponse } from "next";
import postSchema from "../../../db/schemas/post";

export const getAll = async (req: NextApiRequest, res: NextApiResponse) => {
    const posts = await postSchema.find();
    res.status(200).json({ posts: posts });
};

export const seed = async (req: NextApiRequest, res: NextApiResponse) => {
    for (let i = 1; i < 10; i++) {
        await postSchema.create({
            title: "Title " + i,
            body: "Example of body " + i,
        });
    }

    res.status(201).json({ message: "seeded" });
};
