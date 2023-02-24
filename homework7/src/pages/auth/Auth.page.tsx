import React from 'react';
import { Register } from '../../components/auth/register/Register';

import './Auth.css';

export const AuthPage: React.FC = () => {
  return (
    <div className="AuthPage">
      <Register />
    </div>
  );
};
