import { CreateList } from '../components/list/CreateList';
import { useAlertContext } from '../providers/AlertContext';
import styles from './Header.module.css';

type Props ={};

export const AlertsPage:React.FC<Props> = () =>{
    const {alerts, /* isActive , */ changeAlert} = useAlertContext();

    {alerts.map((item)=>{
        const text = Object.values(item)[0];
        console.log(Object.values(item)[0])
       
    })}
  
    return(
            <ul className={''} >
                {alerts.map((item:object, index)=>{
                
                const textItem = Object.keys(item)[0];
                const isActive:boolean = Object.values(item)[0];

                return <CreateList text={textItem} isActive={isActive} key={index} />
                })}
               
            </ul>
            
        
        )
}