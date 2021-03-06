import { LeanDocument } from "mongoose";
import db from "../configs/db";
import postSchema, { IPost } from "../schemas/post";

type Props = {
    posts: LeanDocument<IPost>[];
};

const App = (props: Props) => (
    <div>
        {props.posts.map((post) => (
            <div key={post._id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                <hr />
            </div>
        ))}
    </div>
);

export const getServerSideProps = async () => {
    await db();
    const posts = await postSchema.find();

    return {
        props: {
            posts: JSON.parse(JSON.stringify(posts)),
        },
    };
};

export default App;
