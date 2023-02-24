import {
    createContext,
    PropsWithChildren,
    useContext,
    useEffect,
    useState,
  } from 'react';


export interface AlertsContextState {
    alerts:{}[];
    /*     isActive: boolean[]; */
    countActiveMessage?:number
    changeAlert?: (alert:string, v:boolean) => void;
}
  

  export const AlertsContext = createContext<AlertsContextState>({
    alerts: [],
/*     isActive:[] */
  });
  /* const alertsInitialValue = ['RandomEvent', 'RandomAlert', 'RandomError', 'Not found'] */
  //Костыль
  /* const isAvtive = [true,true,true,true] */

  
  const alertsInitialValue = [
    {
        'RandomEvent': true
    }, 
    {
        'RandomAlert': true
    }, 
    {
        'RandomError': true
    }, 
    {
        'Not found': true
    },
  ]

export const AlertsContextProvider:React.FC<PropsWithChildren> =  ({children}) =>{
    const [alerts, setAlerts] = useState<object[]>(alertsInitialValue);
/* Вариант не рабочий т.к получается общий стейт при клике на один стиль меняет у всех 
const [isActive, setisActive] = useState(isAvtive) */
    const [countActiveMessage,setCountActiveMessage ] = useState(alerts.length)


    const handlerAlertsChange = (alert:string, v:boolean)=>{
    
        let resArray ;
        let count = 0 ;
       resArray =  alerts.map((item)=>{
            if(Object.keys(item)[0] == alert){
                 return {[alert]:!v}
            }
            return item;
        })
        resArray.forEach((item)=>{
            if(Object.values(item)[0] == true){
                count++;
            }
        })
        setAlerts(resArray)
        setCountActiveMessage(count)
    }
  

  
    return (
            <AlertsContext.Provider value={{
                alerts,
/*                 isActive, */
                countActiveMessage,
                changeAlert: handlerAlertsChange,
            }}>
            {children}
            </AlertsContext.Provider>
            )

};

export const useAlertContext = () => useContext(AlertsContext);