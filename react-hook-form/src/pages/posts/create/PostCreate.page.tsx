import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PostForm } from '../../../components/posts/PostForm';
import { createPost } from '../../../services/posts';
import { PostFormValues } from '../../../types/posts';

export const PostCreatePage = () => {
  const [loading, setLoading] = useState(false);
/*   const navigate = useNavigate();
 */
  const handleSubmit = async (data: PostFormValues) => {
      console.log(data);
      
  };

  return (
    <>
      <h1>Create post</h1>
      <PostForm isLoading={loading} onSubmit={handleSubmit} />
    </>
  );
};
