import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PostForm } from '../../../components/posts/form/PostForm';
import { createPost } from '../../../services/posts';
import { PostFormValues } from '../../../types/posts';

export const PostCreatePage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (data: PostFormValues) => {
    setLoading(true);
    try {
      const res = await createPost(data);
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
      <h1>Create post</h1>
      <PostForm isLoading={loading} onSubmit={handleSubmit} />
    </>
  );
};
