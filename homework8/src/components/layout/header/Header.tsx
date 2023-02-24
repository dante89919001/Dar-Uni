import { useAlertContext } from '../../../providers/AlertContext';
import { useUserContext } from '../../../providers/UserContext';
import styles from './Header.module.css';

type Props ={};

export const Header:React.FC<Props> = () =>{
    const {username, changeUsername} = useUserContext();
    const {alerts,/* isActive, */ countActiveMessage , changeAlert} = useAlertContext();

    const handleUsernameClick =() =>{
        changeUsername?.('Ivan Strizhko')
    };

    return(
        <header className={styles.header}>
            <p className={styles.AlertsMessage}>Непрочитанные уведомления: {countActiveMessage}</p>
            <div className={styles.profile_info} onClick={handleUsernameClick}>
                {username}
            </div>
            
        </header>
        
        )
}