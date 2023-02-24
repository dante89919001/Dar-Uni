import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { PostsTable } from '../../../components/posts/table/PostsTable';
import { deletePost, getPost, getPosts } from '../../../services/posts';
import { Post } from '../../../types/posts';

export const PostDetailsPage = () => {
  const [post, setPost] = useState<Post>();
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    if (!id) {
      return;
    }
    setLoading(true);
    getPost(+id).then((res) => {
      setPost(res);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <h1>Post #{id}</h1>
      <Link to={`/posts/edit/${id}`}>Edit</Link>
      <h2>{post?.title}</h2>
      <div>{post?.body}</div>
    </>
  );
};
