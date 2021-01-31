import { NextApiRequest, NextApiResponse } from "next";
import db from "../../../db";
import * as data from "./data";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    await db();

    switch (req.query.get) {
        case "all":
            data.getAll(req, res);
            break;

        case "seed":
            data.seed(req, res);
            break;
    }
};
