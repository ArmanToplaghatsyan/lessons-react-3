import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IBook } from '../../type/type';
import { deleteBookById } from '../../store/book/action';
import { Link } from 'react-router-dom';

export const Books: React.FC = React.memo((): JSX.Element => {
  const { books } = useSelector((state: any) => state.book);
  console.log(books);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Books</h1>
      {books.map((elm: IBook) => {
        return (
          <div key={elm.id}>
            <h2>{elm.title}</h2>
            <p>{elm.price}</p>
            <Link to={'/detailsBook/'+elm.id}>See More</Link>
            <br />
            <br />
            <button onClick={() => dispatch(deleteBookById(elm.id))}>&times;</button>
          </div>
        );
      })}
    </div>
  );
});
