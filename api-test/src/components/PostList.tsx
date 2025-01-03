import { useEffect, useState } from "react";
import { getPosts, deletePost } from "../api/api";
import { link, button, checkbox, listActions } from "../style/common";

interface Post {
  id: number;
  title: string;
  body: string;
}

const PostList = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPosts, setSelectedPosts] = useState<Set<number>>(new Set());
  const [selectAll, setSelectAll] = useState(false);
  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getPosts();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  const toggleSelection = (postId: number) => {
    setSelectedPosts((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
  };

  const handleDelete = async () => {
    for (const postId of selectedPosts) {
      await deletePost(postId);
    }
    setPosts((prev) => prev.filter((post) => !selectedPosts.has(post.id)));
    setSelectedPosts(new Set());
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedPosts(new Set());
    } else {
      setSelectedPosts(new Set(posts.map((post) => post.id)));
    }
    setSelectAll(!selectAll);
  };

  useEffect(() => {
    if (posts.length === selectedPosts.size) {
      setSelectAll(true);
    } else {
      setSelectAll(false);
    }
  }, [selectedPosts, posts]);

  return (
    <div>
      <h2>밑에는 게시글이야</h2>
      <div css={listActions}>
        <button css={button} onClick={handleSelectAll}>
          {selectAll ? "전체 해제" : "전체 선택"}
        </button>
        <button
          css={button}
          onClick={handleDelete}
          disabled={selectedPosts.size === 0}
        >
          삭제
        </button>
      </div>
      <div>
        {posts.map((post) => (
          <div key={post.id}>
            <ul>
              <input
                type="checkbox"
                css={checkbox}
                checked={selectedPosts.has(post.id)}
                onChange={() => toggleSelection(post.id)}
              />
              <a href={`/detail/${post.id}`} css={link}>
                {post.title.slice(0, 5)}
              </a>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;
