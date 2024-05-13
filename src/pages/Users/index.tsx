import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IUser } from '../../type/type';
import { deleteUserById } from '../../store/user/action';
import { deleteBookByUserId } from '../../store/book/action';
import { Link } from 'react-router-dom';

export const Users: React.FC = React.memo((): JSX.Element => {
 const {users} = useSelector((state: any) => state.user)
 const dispatch = useDispatch()

  return (
    <div>
      <h1>Users</h1>
      {
        users.map((elm:IUser) => {
          return(
          <div key={elm.id}>
            <h2>{elm.name} {elm.surname}</h2>
            <button onClick={() => {
              dispatch(deleteUserById(elm.id))
              dispatch(deleteBookByUserId(elm.id))
            }}>&times;</button>
            <br /><br />
            <Link to={'/detailsUser/'+elm.id}>See More</Link>
          </div>
          )
        })
      }
    </div>
  );
});
