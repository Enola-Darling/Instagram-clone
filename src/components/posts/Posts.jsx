import "./Posts.css";

import Post from "../post";

const Posts = ({ posts }) => {
  return (
    <div>
      <ul className="Posts__List">
        {posts?.map((post) => (
          <li className="Posts__Element" key={post?.id}>
            <Post post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
