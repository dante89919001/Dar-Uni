import React from 'react';
import { useUserContext } from '../../providers/UserContext';

type Props = {};
export const UserInfo: React.FC<Props> = () => {
  const { username } = useUserContext();
  return <div>{username}</div>;
};

