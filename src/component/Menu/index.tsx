import React from 'react';
import { Link } from 'react-router-dom';

export const Menu: React.FC = React.memo((): JSX.Element => {
  return (
    <div>
      <nav>
        <ul>
            <li><Link to={'/'}>Book</Link></li>
            <li><Link to={'/addBook'}>Add Book</Link></li>
            <li><Link to={'/users'}>Users</Link></li>
            <li><Link to={'/addUser'}>Add User</Link></li>
        </ul>
      </nav>
    </div>
  );
});
