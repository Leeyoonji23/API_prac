import { useParams } from "react-router-dom";
import PostForm from "../components/PostForm";

const Detail = () => {
  const { postId } = useParams<{ postId: string }>();

  if (!postId) {
    return <div>게시글이 존재하지 않습니다.</div>;
  }

  return (
    <div>
      <h1>게시글 상세</h1>
      <PostForm postId={parseInt(postId)} />
    </div>
  );
};

export default Detail;
