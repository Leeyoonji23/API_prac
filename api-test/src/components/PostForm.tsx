import React, { useState } from "react";

interface PostFormProps {
  postId?: number;
  existingTitle?: string;
  existingBody?: string;
  onSubmit: (updatedPost: { title: string; body: string }) => void;
}

const PostForm = ({
  postId,
  existingTitle = "",
  existingBody = "",
  onSubmit,
}: PostFormProps) => {
  const [title, setTitle] = useState<string>(existingTitle);
  const [body, setBody] = useState<string>(existingBody);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit({ title, body });
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
        <label>Body</label>
        <textarea value={body} onChange={(e) => setBody(e.target.value)} />
      </div>
      <button type="submit">{postId ? "게시글 수정" : "완료"}</button>
    </form>
  );
};

export default PostForm;
