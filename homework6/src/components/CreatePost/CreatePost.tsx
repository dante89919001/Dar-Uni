import { Link } from 'react-router-dom'
import styles from './CreatePost.module.css'


type Post = {
    id:number,
    names:string,
    title:string,
    img:string,
    postInfo: string
}


export const CreatePost :React.FC<Post> = ({id, names , title , img, postInfo})=>{

    return (
        <li className={styles.post}>
            <div>
                <h2>{names}</h2>
                <img src={img} width ='150px' alt={names} />
               
            </div>
            <Link className={styles.link} to={`/${postInfo}/${id}`}>Подробнее</Link> 
        </li>
    )
}