import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { findBookById } from '../../store/book/action';

export const BookDetails: React.FC = React.memo((): JSX.Element => {
  const dispatch = useDispatch();
  const { book } = useSelector((state: any) => state.book);
  const { id } = useParams();
  console.log(id, book);
  useEffect(() => {
    if (id) dispatch(findBookById(+id));
  }, [id]);

  return (
    <div>
      <h1>BookDetails</h1>
      <h2>Title --- {book.title}</h2>
      <h3>Price --- {book.price}</h3>
      <p>Count --- {book.count}</p>
      <p>Description --- {book.description}</p>

      {book.comment?.map((elm:string, id:number) => {
        return (
          <div key={id}>
            <p>{elm}</p>
          </div>
        );
      })}
    </div>
  );
});
