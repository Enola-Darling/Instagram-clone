import "./Posts.css";

import Post from "../post";

const Posts = ({ posts }) => {
  console.log(posts);
  return (
    <div>
      <ul>
        {posts?.map((post) => (
          <li key={post?.id}>
            <Post post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
