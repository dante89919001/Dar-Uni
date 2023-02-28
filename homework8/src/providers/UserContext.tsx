import {
    createContext,
    PropsWithChildren,
    useContext,
    useEffect,
    useState,
  } from 'react';
  
  export interface UserContextState {
    username: string;
    changeUsername?:(v:string) =>void;
  }
  export const UserContext = createContext<UserContextState>({
    username: '',
  });


  export const UserContextProvider:React.FC<PropsWithChildren> = ({children}) =>{
    
    const [username, setUsername] = useState('Ivan');
    const handleUsernameChange = (v:string) =>{
      setUsername(v);
    };

    return (
        <UserContext.Provider value={{
            username,
            changeUsername: handleUsernameChange,
        }}>
        {children}
        </UserContext.Provider>
        )

};

export const useUserContext = () => useContext(UserContext);