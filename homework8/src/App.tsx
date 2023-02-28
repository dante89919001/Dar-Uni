import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Outlet,
  Route,
  RouterProvider,
  Routes,
} from 'react-router-dom';

import Login from "./components/auth/login/Login";
import { deletePost, getPosts } from './services/posts';
import { Header } from './components/layout/header/Header';
import { createContext, useState } from 'react';
import { UserInfo } from './components/user/UserInfo';
import { UserContext, UserContextProvider } from './providers/UserContext';
import { AlertsPage } from './pages/AlertsPage';
import { AlertsContext, AlertsContextProvider } from './providers/AlertContext';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<AlertsPage />} />
      <Route path="/Login" element={<Login />} />
    </>
  )
);


function App() {
  return (
    <UserContextProvider>
    <AlertsContextProvider>
      <div className="App">
      <Header/>
      <div className='App-content'>
      <UserInfo />
      </div>
       <RouterProvider router={router} />
    </div>
    </AlertsContextProvider>
    </UserContextProvider>
  );
}

export default App;


