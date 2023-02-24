import './App.css';
import { AuthPage } from './pages/auth/Auth.page';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Outlet,
  Route,
  RouterProvider,
  Routes,
} from 'react-router-dom';
import { PostsPage } from './pages/posts/list/Posts.page';
import { PostDetailsPage } from './pages/posts/details/PostDetails.page';
import { PostCreatePage } from './pages/posts/create/PostCreate.page';
import { PostEditPage } from './pages/posts/edit/PostEdit.page';

import Login from "./components/auth/login/Login";
import { deletePost, getPosts } from './services/posts';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Login />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/posts/create" element={<PostCreatePage />} />
      <Route path="/posts/edit/:id" element={<PostEditPage />} />
      <Route path="/posts/:id" element={<PostDetailsPage />} />
      <Route path="/posts" element={<PostsPage />} />
    </>
  )
);


function App() {
  return (
    <div className="App">
       <RouterProvider router={router} />
    </div>
  );
}

export default App;
