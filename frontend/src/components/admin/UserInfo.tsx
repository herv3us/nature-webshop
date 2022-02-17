import React, { useEffect, useState } from 'react';
import { getAllUsers } from '../../services/userServices';
import { User } from '../../models/User';

function UserInfo() {
  const [users, setUsers] = useState<[] | [User]>([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const data = await getAllUsers();
    setUsers(data.users);
  };
  return (
    <ul>
      {users.map((user) => (
        <li key={user.username}>
          <p>
            {user.firstName} {user.lastName}{' '}
          </p>
        </li>
      ))}
    </ul>
  );
}

export default UserInfo;
