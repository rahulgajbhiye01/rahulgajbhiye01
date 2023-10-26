import { BlogsData } from "@constants";
import { Link } from "react-router-dom";

const Post = ({ topic }) => {
  const filteredData = BlogsData.filter((Data) => {
    return Data.topic === topic;
  });

  return (
    <>
      <div className="m-4 flex flex-col gap-4 text-start">
        {(!topic ? BlogsData : filteredData).map((post) => {
          return (
            <Link key={post.title} className="bg-neutral-800 p-4">
              <p className="text-sm">{post.topic} </p>
              <h1 className="text-2xl font-bold">{post.title}</h1>
              <p className="text-base">{post.body}</p>
              <p className="text-sm">{post.author}</p>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Post;
