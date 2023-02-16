import { Link, Outlet } from 'react-router-dom';
import styles from './Header.module.css';





export const Header  = () =>{

    return(
        <><nav className={styles.header}>
            <ul className={styles.nav}>

                <Link to={'/'}>Home</Link>
                <Link to="/movies">Movies</Link>
                <Link to="/concerts">Concerts</Link>
                <Link to="/theatre">Theatre</Link>

            </ul>
        </nav><Outlet /></>
        );
    };