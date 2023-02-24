import { FormEvent } from "react";
import useInput from "../../../hooks/useInput";
import { FormInput } from "../../ui/form-input/FormInput";
import styles from './Login.module.css'

type Props = {};

const Login = (props: Props) => {
  const { value, handleChange ,isValid} = useInput('ivan');
  const { value: lastNameValue, handleChange: handleLastnameChange , isValid:isValidLastName} = useInput('');
  const addressInput = useInput();


  //Разные типы не получается использовать, поскольку данный FormInput использует типизацию Props с четко заданным String
  //Для инпута с другой типизацией должно работать
  return (
    <form className="Register__form" >
      <FormInput label={"First name"} type='text' name="firstName" onChange={handleChange} value={value} className={isValid ? `${styles.valid}`:`${styles.notValid}`} placeholder={isValid ? ``:`Введите данные`}/>
      <FormInput label={"Last name"} name="lastName" onChange={handleLastnameChange} value={lastNameValue} className={isValidLastName ? `${styles.valid}`:`${styles.notValid}`}placeholder={isValidLastName ? ``:`Введите данные`}/>
      <FormInput label={"Address"} name="address" onChange={addressInput.handleChange} value={addressInput.value} className={addressInput.isValid ? `${styles.valid}`:`${styles.notValid}`} placeholder={addressInput.isValid ? ``:`Введите данные`}/>
      <button type="submit">Save</button>
    </form>
  );
};

export default Login;