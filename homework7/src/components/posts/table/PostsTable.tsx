import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../../../types/posts';

type Props = {
  posts: Post[];
};

export const PostsTable: FC<Props> = ({ posts }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>User</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post) => (
          <tr key={post.id}>
            <td>
              <Link to={`/posts/${post.id}`}>{post.id}</Link>
            </td>
            <td>{post.title}</td>
            <td>{post.userId}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
