import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PostsTable } from '../../../components/posts/table/PostsTable';
import { deletePost, getPosts } from '../../../services/posts';
import { Post } from '../../../types/posts';

export const PostsPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getPosts().then((res) => {
      setPosts(res);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }


  return (
    <>
      <h1>Posts</h1>
      <Link to="/posts/create">Create post</Link>
      <PostsTable posts={posts} />
    </>
  );
};
