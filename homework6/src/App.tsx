import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Link,
  Outlet,

} from 'react-router-dom';



import { Header } from './components/header/Header';
import { Movies } from './pages/movies/Movies';
import { Concerts } from './pages/concerts/Concerts';
import { Theatre } from './pages/theatre/Theatre';
import { HomePage } from './pages/homePage/HomePage';
import { MovieDetailsPage , EventsDetailsPage , ConcertsDetailsPage } from './pages/details/PostDetails.page';
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Header/>} >
      <Route path='/' element={<HomePage/>} />
      <Route path='/movies' element={<Movies/>} />
      <Route path='/concerts' element={<Concerts/>} />
      <Route path='/theatre' element={<Theatre/>} />
      <Route path="/concerts/:id" element={<ConcertsDetailsPage />} />
      <Route path="/:movies/:id" element={<MovieDetailsPage />} />
      <Route path="/theatre/:id" element={<EventsDetailsPage />} />
      </Route>
 </>
  )
);


function App() {
  return (
    
  <div className="App">
   <h1>React router</h1>

  <RouterProvider router={router} />

  </div> 
    
  );
}

export default App;
