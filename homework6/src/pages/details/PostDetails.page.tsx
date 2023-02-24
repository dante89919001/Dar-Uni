import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { movies } from '../movies/Movies';
import styles from './PostDetails.module.css'
import { events } from '../theatre/Theatre';
import { concerts } from '../concerts/Concerts';
export const MovieDetailsPage = () => {
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const [movie ,setMovie] = useState(movies[0]);
  useEffect(() => {
    if (!id) {

        
      return;
    }
    setLoading(true);

    movies.forEach((item)=>{
        if( item.id == +id){
            setMovie(item);
            setLoading(false);
        }
        
    })

  }, [id]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
    <div className={styles.post}>
    <Link to={'/movies'}>Вернуться к списку</Link>
      <h2>{movie?.movie}</h2>
      <img src={movie.img}  alt="movie" />
      <div>{movie?.title}</div>
     </div>
     
    </>
  );
};

export const EventsDetailsPage = () => {
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    const [event ,setMovie] = useState(events[0]);
    useEffect(() => {
      if (!id) {
  
          
        return;
      }
      setLoading(true);
  
      events.forEach((item)=>{
          if( item.id == +id){
              setMovie(item);
              setLoading(false);
          }
         
      })
  
    }, [id]);
  
    if (loading) {
      return <h2>Loading...</h2>;
    }
  
    return (
      <>
      <div className={styles.post}>
      <Link to={'/theatre'}>Вернуться к списку</Link>
        <h2>{event?.event}</h2>
        <img src={event.img}  alt="event" />
        <div>{event?.title}</div>
       </div>
       
      </>
    );
  };
  export const ConcertsDetailsPage = () => {
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    const [concert ,setMovie] = useState(concerts[0]);
    useEffect(() => {
      if (!id) {
  
          
        return;
      }
      setLoading(true);
  
      concerts.forEach((item)=>{
          if( item.id == +id){
              setMovie(item);
              setLoading(false);
          }
         
      })
  
    }, [id]);
  
    if (loading) {
      return <h2>Loading...</h2>;
    }
  
    return (
      <>
      <div className={styles.post}>
      <Link to={'/concerts'}>Вернуться к списку</Link>
        <h2>{concert?.concert}</h2>
        <img src={concert.img}  alt="concert" />
        <div>{concert?.title}</div>
       </div>
       
      </>
    );
  };