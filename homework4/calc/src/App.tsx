import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { CreateButton } from './components/createButton/CreateButton';
import buttonsData from './buttonsData';


function App() {

    const [firstnumber, setFirstNumber] = useState<string>("")
    
    const [secondNumber, setSecondNumber] = useState<string>("");

    const [sign , setSign] = useState<string>('');

    const [resultText, setResultText] = useState<string>('0');

    useEffect(()=>{
      if(secondNumber){
        setResultText(`${firstnumber} ${sign} ${secondNumber}`)
      }else if (sign){
        setResultText(`${firstnumber} ${sign}`)
      }else{
        setResultText(`${firstnumber}`)
      }
    },[firstnumber,secondNumber,sign])

    const reg = /[+*/-]/; 

    function clearAll() {
      setFirstNumber("");
      setSecondNumber("");
      setSign('');
    
     
  }

    const handleButtonClick = (value : string) =>{
      if((value >= '0' && value <= '9') || value == '.'){
        
        if(firstnumber && sign != ''){
          if(value == '.' && (secondNumber.indexOf('.') != -1)){
            setSecondNumber((prev)=> `${prev}`);
         
          }else if(value != '.'){
            setSecondNumber((prev)=> `${prev}${value}`);
          }else if(value == '.' && secondNumber ){
            setSecondNumber((prev)=> `${prev}${value}`);
          }
        }else{
            if(value == '.' && (firstnumber.indexOf('.') != -1)){
              setFirstNumber((prev)=> `${prev}`);
           
            }else if(value != '.'){
              setFirstNumber((prev)=> `${prev}${value}`);
            }else if(value == '.' && firstnumber ){
              setFirstNumber((prev)=> `${prev}${value}`);
            }
        }
      }


        if(reg.exec(value) && value != '='){
          setSign(value)
      }

      if(value =='ac'){
          clearAll();
      }

   

      if(value == "=" && firstnumber){
          switch (sign) {
              case "+":
                setFirstNumber((+firstnumber + +secondNumber) + '');
                setSecondNumber('')
                setSign('')
                  break;
              case "-":
                setFirstNumber((+firstnumber - +secondNumber) + '');
                setSecondNumber('')
                setSign('')
                  break;
              case "*":
                setFirstNumber((+firstnumber * +secondNumber) + '');
                setSecondNumber('')
                setSign('')
                  break;
              case "/":
                  if(secondNumber === "0"){
                      setResultText('Ошибка');
                      clearAll();
                      return;
                  }
                  setFirstNumber((+firstnumber / +secondNumber) + '');
                  setSecondNumber('')
                  setSign('')
                  
                  break;
          }
          
          
      
      }
     
      
    }

  return (
    <div className="calc">
            <div className="calc-screen">
                <p className="calc-output">{resultText}</p>
            </div>
            <div className="buttons">
            {buttonsData.map( (buttonItem, index)=> {
              return <CreateButton key={buttonItem.button} className = {buttonItem.className} value = {buttonItem.button} callback= {handleButtonClick} />
            })}
            </div>
        </div>
  );
}

export default App;
