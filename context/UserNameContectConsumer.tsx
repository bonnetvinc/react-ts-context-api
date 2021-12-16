import React from 'react';
import { useUserName } from './UserNameContext';

const UserNameContextConsumer: React.FC = () => {
  const { name, setName } = useUserName();

  return <p>{name}</p>;
};

export default UserNameContextConsumer;
