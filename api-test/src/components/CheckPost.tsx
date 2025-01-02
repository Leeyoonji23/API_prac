//게시글 조회

import { getPostId } from "../api/api";
import { useEffect, useState } from "react";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface CheckDetailProps {
  postId: number;
}

const CheckPost = ({ postId }: CheckDetailProps) => {
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await getPostId(postId);
        setPost(data);
      } catch (error) {
        console.error("게시글 조회 에러", error);
      }
    };
    fetchPost();
  }, [postId]);

  if (!post) {
    return <div> 로딩중입니다 로딩중입니다 로딩중입니다 </div>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <h3>{post.body}</h3>
    </div>
  );
};

export default CheckPost;
