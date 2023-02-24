import { SetStateAction, useEffect, useState } from "react";

/* type UseInputProps<T> = {
  defaultValue?: T;
} */
const useInput = <T = string>(defaultValue?:T) => {


const [value, setValue] = useState<T|string>(defaultValue||'');

const [isValid, setIsValid] = useState(false)

useEffect(()=>{
  if(defaultValue){
    isValidFun(defaultValue)
  }
 
},[])

const isValidFun =(v:T|string) =>{
  if(v){
    setIsValid(true)
  }else{
    setIsValid(false)
  }
}

const handleChange = (newValue: T)=> {
    isValidFun(newValue);
    setValue(newValue);
  };



  return { value, handleChange,isValid };
};

export default useInput;
