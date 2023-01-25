import React, { useState } from 'react';

export const ShowDateButtons: React.FC = () => {
  const [date, setDate] = useState("");

  const btnShowHandler = () => {
    setDate(new Date().toISOString());
  };

  const btnRemoveHandler = () => {
    setDate("");
  };

  return (
    <div>
    <h2>{date}</h2>
      <button onClick={btnShowHandler}>Показать дату</button> 
      <br></br>
       <button onClick={btnRemoveHandler}>Скрыть дату</button>
    </div>
  );
};
