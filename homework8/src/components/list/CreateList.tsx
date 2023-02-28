import { AlertsContext, useAlertContext } from '../../providers/AlertContext';
import styles from './CreateList.module.css'

type Props={
    text:string;
    isActive:boolean;
}


export const CreateList:React.FC<Props> = ({text, isActive}) =>{
    const {alerts,/* isActive, */changeAlert} = useAlertContext();
  
    
    const handlerAlertsClick =(text:string) =>{
      
        console.log(text);
        console.log(isActive);
        changeAlert?.(text,isActive );
        
    };
    return(
            <li className={isActive ? `${styles.listActive}`: `${styles.list}`} onClick={(e) =>{handlerAlertsClick(e.currentTarget.innerHTML)}}>{text}</li>

    )
}