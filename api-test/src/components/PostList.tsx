import { useEffect, useState } from "react";
import { getPosts } from "../api/api";
import { css } from "@emotion/react";
import { container, link, card } from "../style/common";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const listItem = css`
  margin-bottom: 1rem;
`;

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
    <div css={container}>
      <h2>게시글</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id} css={[card, listItem]}>
            <a href={`/detail/${post.id}`} css={link}>
              {post.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default PostList;
