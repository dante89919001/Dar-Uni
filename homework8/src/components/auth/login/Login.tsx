import { FormEvent } from "react";
import useInput from "../../../hooks/useInput";
import { FormInput } from "../../ui/form-input/FormInput";

type Props = {};

const Login = (props: Props) => {
  const { value, handleChange } = useInput('ivan');
  const { value: lastNameValue, handleChange: handleLastnameChange } = useInput('');
  const addressInput = useInput();


  //Разные типы не получается использовать, поскольку данный форминпут использует типизацию Props с четко заданным String, для другой формы должно работать
  return (
    <form className="Register__form" >
      <FormInput label={"First name"} type='text' name="firstName" onChange={handleChange} value={value} />
      <FormInput label={"Last name"} name="lastName" onChange={handleLastnameChange} value={lastNameValue} />
      <FormInput label={"Address"} name="address" onChange={addressInput.handleChange} value={addressInput.value} />
      <button type="submit">Save</button>
    </form>
  );
};

export default Login;
