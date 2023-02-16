import { CreatePost } from "../../components/CreatePost/CreatePost";
import styles from './Movies.module.css'
export const movies = [

     {
        id:1,
        postInfo:'movies',
        movie: 'Константин',
        title:'Константи́н: Повелитель тьмы» (англ. Constantine) — супергеройский фильм режиссёра Фрэнсиса Лоуренса, основанный на серии комиксов Hellblazer, публиковавшейся издательством DC Comics. Премьера состоялась 8 февраля 2005 года.',
        img:'https://upload.wikimedia.org/wikipedia/ru/thumb/8/89/Constantine_Poster.jpg/800px-Constantine_Poster.jpg'
        
    },
    {
        id:2,
        postInfo:'movies',
        movie: 'Мстители',
        title:'Команда супергероев дает отпор скандинавскому богу Локи. Начало фантастической саги в киновселенной Marvel',
        img:'https://upload.wikimedia.org/wikipedia/ru/3/3c/The_Avengers_2012_logo.jpg'
    },
    {
        id:3,
        postInfo:'movies',
        movie: 'Железный человек',
        title:'Роберт Дауни-младший и Гвинет Пэлтроу превращаются в культовых героев знаменитых комиксов от Marvel. Тони Старк – баловень судьбы, наследник миллиардного состояния, филантроп и плейбой.',
        img:'https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/c8e2f069-15f1-4803-95c0-aba858fec360/300x450'
    },

]

export const Movies = () =>{

    return (
        <><h1>Movies</h1><div>
            <ul className={styles.movies}>
            {movies.map( (item, index)=> {
              return <CreatePost key={item.id} names={item.movie} title={item.title} id={item.id} img={item.img} postInfo={item.postInfo}/>
            })}            
            </ul>
        </div></>
        );

}