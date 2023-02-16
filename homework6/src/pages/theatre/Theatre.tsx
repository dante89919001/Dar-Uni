import { CreatePost } from "../../components/CreatePost/CreatePost";
import styles from './Theatre.module.css'

export const events = [

    {
       id:1,
       postInfo:'theatre',
       event: 'Наследие великой степи',
       title:'Концертная программа Наследие Великой степи стала своеобразной визитной карточкой театра на родине и за ее пределами. Красота и нежность женского танца в постановках заслуженного деятеля Казахстана РК Айгуль Тати пленяют и восхищают.',
       img:'https://ticketon.kz/media/upload/11655u54364_nasledie-velikoy-stepi-astanaballet1719.jpg'
   
   },
   {
       id:2,
       postInfo:'theatre',
       event: 'Идеальные незнакомцы',
       title:'Народный молодежный театр «Современник» приглашает вас на спектакль: «ИДЕАЛЬНЫЕ НЕЗНАКОМЦЫ»',
       img:'https://ticketon.kz/files/media/idealnye-neznakomtsy1100.jpg'
   },
   {
       id:3,
       postInfo:'theatre',
       event: 'Вечер балета',
       title:'Звезды Королевского театра Ковент-Гарден, Английского Национального балета, Баварского государственного театра, Голландского Национального балета и Большого театра.',
       img:'https://ticketon.kz/media/upload/39703u55147_freedom-gala-v-astane22.jpg'
   },

]

export const Theatre = () =>{

   return (
       <><h1>Events</h1><div>
           <ul className={styles.events}>
           {events.map( (item, index)=> {
             return <CreatePost key={item.id} names={item.event} title={item.title} id={item.id} img={item.img} postInfo={item.postInfo}/>
           })}            
           </ul>
       </div></>
       );

}