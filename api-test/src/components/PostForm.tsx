import React, { useState } from "react";
import { createPost, rewritePost } from "../api/api";

interface PostFormProps {
  postId?: number;
  existingTitle?: string;
  existingBody?: string;
}

const PostForm = ({
  postId,
  existingTitle = "",
  existingBody = "",
}: PostFormProps) => {
  const [title, setTitle] = useState<string>(existingTitle);
  const [body, setBody] = useState<string>(existingBody);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const postData = { title, body };

    if (postId) {
      // 수정하는 경우
      await rewritePost(postId, postData);
    } else {
      // 새로 작성하는 경우
      await createPost(postData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label></label>
        <textarea value={body} onChange={(e) => setBody(e.target.value)} />
      </div>
      <button type="submit">{postId ? "게시글 수정" : "게시글 작성"}</button>
    </form>
  );
};

export default PostForm;
