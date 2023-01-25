import React from 'react';
import './CreateButton.css';
type Props = {
    className: string;
    value:string;
    callback: (v: string) => void;
}

export const CreateButton: React.FC<Props> = ({
    className, 
    value, 
    callback,
  }) => {
    return (
     <div><button className={className} onClick={() => callback(value)}>{value}</button></div>
    );
  };
  