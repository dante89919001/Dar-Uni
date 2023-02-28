import { SetStateAction, useState } from "react";

/* type UseInputProps<T> = {
  defaultValue?: T;
} */
const useInput  = <T = string>( defaultValue?:T  ) => {


  const [value, setValue] = useState<T|string>(defaultValue||'');

 

  const handleChange = (newValue: T)=> {
    setValue(newValue);
  };

  return { value, handleChange };
};

export default useInput;
