
import { CreatePost } from "../../components/CreatePost/CreatePost";
import styles from './Concerts.module.css'

export const concerts = [

    {
       id:1,
       postInfo:'concerts',
       concert: 'Гарри Поттер и Пираты Карибского моря',
       title:'Вас ждёт колоссальный живой звук в исполнении большого симфонического оркестра. Для вас выступят более 100 музыкантов. А слушать музыку из фильмов будете под самые значительные моменты из фильмов в хронологическом порядке.',
       img:'https://ticketon.kz/media/upload/39663u54364_garri-potter-i-piraty-karibskogo-morya-ne-prosto.jpg'
   
   },
   {
       id:2,
       postInfo:'concerts',
       concert: 'Stand Up',
       title:'Stand Up концерт Расула Чабдарова в Астане',
       img:'https://ticketon.kz/media/upload/39863u54364_rasul-chabdarov-v-astane.jpg'
   },
   {
       id:3,
       postInfo:'concerts',
       concert: 'Гала-концерт звезд российского балета в Астане',
       title:'Гала- концерт Звёзд Российского Балета, это высокий профессионализм, особенный хореографический стиль, неповторимая выразительность, и одухотворённость.',
       img:'https://ticketon.kz/media/upload/40061u55449_gala-kontsert-zvezd-rossiyskogo-baleta-v-astane1810.jpeg'
   },

]

export const Concerts = () =>{

   return (
       <><h1>Events</h1><div>
           <ul className={styles.concerts}>
           {concerts.map( (item, index)=> {
             return <CreatePost key={item.id} names={item.concert} title={item.title} id={item.id} img={item.img} postInfo={item.postInfo}/>
           })}            
           </ul>
       </div></>
       );

}