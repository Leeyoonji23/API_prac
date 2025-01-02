import { useEffect, useState } from "react";
import { getPosts } from "../api/api";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const PostList = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getPosts();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>게시물</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <h3>{post.body}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
