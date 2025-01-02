import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPostId, rewritePost } from "../api/api";
import PostForm from "../components/PostForm";

interface Post {
  id: number;
  title: string;
  body: string;
}

const Detail = () => {
  const { postId } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  useEffect(() => {
    if (postId) {
      const fetchPost = async () => {
        try {
          const data = await getPostId(Number(postId));
          setPost(data);
        } catch (error) {
          console.error("게시글 조회 에러", error);
        }
      };
      fetchPost();
    }
  }, [postId]);

  const handleUpdate = async (updatedPost: { title: string; body: string }) => {
    try {
      // 게시글 수정 API 호출
      const updatedData = await rewritePost(post!.id, updatedPost);
      // 수정된 게시글로 상태 갱신
      setPost(updatedData);
      setIsEditing(false);
    } catch (error) {
      console.error("게시글 수정 에러", error);
    }
  };

  if (!post) {
    return <div>로딩중 로딩중 로딩중</div>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>

      <button onClick={() => setIsEditing(true)}>게시글 수정</button>
      {isEditing && (
        <PostForm
          onSubmit={handleUpdate} 
        />
      )}
    </div>
  );
};

export default Detail;
