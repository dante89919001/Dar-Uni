import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { PostForm } from '../../../components/posts/form/PostForm';
import { deletePost, getPost, updatePost } from '../../../services/posts';
import { Post, PostFormValues } from '../../../types/posts';

export const PostEditPage = () => {
  const navigate = useNavigate();

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

  const handleSubmit = async (data: PostFormValues) => {
    if (!id) {
      return;
    }
    setLoading(true);
    try {
      const res = await updatePost(+id, data);
      if (res?.id) {
        navigate('/posts');
      }
    } catch (e) {
      alert(e);
    } finally {
      setLoading(false);
    }
  };

  

  return (
    <>
      <h1>Edit post #{id}</h1>
      {post && (
        <PostForm
          initialValues={post}
          isLoading={loading}
          onSubmit={handleSubmit}
        />
      )}
    </>
  );
};
