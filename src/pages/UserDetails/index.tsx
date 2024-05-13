import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { findUserById } from '../../store/user/action';

export const UserDetails: React.FC = React.memo((): JSX.Element => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: any) => state.user);
  const { id } = useParams();
  useEffect(() => {
    if (id) dispatch(findUserById(+id));
  }, [id]);

  return (
    <div>
      <h1>UserDetails</h1>
      <h2>{user.name} {user.surname}</h2>
      <h2>{user.email}</h2>
      <p>{user.age}</p>
      <p></p>
    </div>
  );
});
