import React ,{ FormEvent, useRef, useState }  from 'react';
import logo from './logo.svg';
import './App.css';
import { FormInput } from './components/form-input/FormInput';

function App() {

  type CalcForm = {
    firstNumber:string,
    secondNumber:string, 
    result:number
  }

  const initialFormData: CalcForm = {
  firstNumber: '',
  secondNumber: '',
  result: 0
};

  const [formData, setFormData] = useState<CalcForm>(initialFormData);

  const [selectValue , setselectValue] = useState('+')

  const changeSelect = (e:any) => {
    setselectValue(e.target.value)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    let res = 0 ;
    if(formData.secondNumber && formData.firstNumber){
      switch (selectValue) {
          case "+":
            res = (+formData.firstNumber + +formData.secondNumber)
            setFormData((v) => ({
              firstNumber: `${res}`,
              secondNumber:'',
              result:res
            }));
              break;
          case "-":
            res = (+formData.firstNumber - +formData.secondNumber)
            setFormData((v) => ({
              firstNumber: `${res}`,
              secondNumber:'',
              result:res
            }));
              break;
          case "*":
            res = (+formData.firstNumber * +formData.secondNumber)
            setFormData((v) => ({
              firstNumber: `${res}`,
              secondNumber:'',
              result:res
            }));
              break;
          case "/":
              if(formData.secondNumber === "0"){
                  return;
              }
              res = (+formData.firstNumber / +formData.secondNumber)
              setFormData((v) => ({
                firstNumber: `${res}`,
                secondNumber:'',
                result:res
              }));
              
              break;
            }
          }
  };

  const handleFormChange = (Numbers: keyof CalcForm) => {
    console.log(formData);
    
    
    return (value: string) => {
      setFormData((v) => ({
        ...v,
        [Numbers]: value,
      }));
    };

    
  };

  return (
    <form className="Form" onSubmit={handleSubmit}>
      <FormInput
        label={'FirstNumber'}
        name="firstNumber"
        type='number'
        placeholder='Введите число'
        onChange={handleFormChange('firstNumber')}
        value={formData.firstNumber}
      />
      <select name="Sign" id="Sign"  placeholder='Выберите операцию'onChange={changeSelect} value = {selectValue}>
        <option >+</option>
        <option >-</option>
        <option >/</option>
        <option >*</option>
      </select>
      <FormInput
        label={'SecondNumber'}
        name="SecondNumber"
        type='number'
        placeholder='Введите число'
        onChange={handleFormChange('secondNumber')}
        value={formData.secondNumber}
      />
      <h2 className='result'>{formData.result}</h2>
      <button className='equal' type="submit">Посчитать</button>
    </form>
  );

}

export default App;


