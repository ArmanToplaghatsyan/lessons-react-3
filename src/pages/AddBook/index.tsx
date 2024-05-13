import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { IBook, IUser } from '../../type/type';
import { addBook } from '../../store/book/action';

export const AddBook: React.FC = React.memo((): JSX.Element => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IBook>();
  const { users } = useSelector((state: any) => state.user);
  console.log(users);

  const save = (data: IBook): void => {
    dispatch(addBook({ ...data, id: Date.now(), comment: [] }));
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(save)}>
        <h2>Add Book</h2>
        <label>title</label>
        <br />
        <input
          type="text"
          placeholder="title"
          {...register('title', { required: 'Enter title' })}
        />
        {errors.title && <p>{errors.title.message}</p>}
        <br></br>
        <label>price</label>
        <br />
        <input
          type="text"
          placeholder="price"
          {...register('price', {
            required: 'Enter price',
            pattern: {
              value: /^\d+$/,
              message: 'NaN',
            },
          })}
        />
        {errors.price && <p>{errors.price.message}</p>}
        <br></br>
        <label>count</label>
        <br />
        <input
          type="text"
          placeholder="count"
          {...register('count', {
            required: 'Enter count',
            pattern: {
              value: /^\d+$/,
              message: 'NaN',
            },
          })}
        />
        {errors.count && <p>{errors.count.message}</p>}
        <br />
        <label>description</label>
        <br />
        <input
          type="text"
          placeholder="description"
          {...register('description', { required: 'Enter description' })}
        />
        {errors.description && <p>{errors.description.message}</p>}
        <br></br>
        <br></br>
        <select {...register('userId', { required: 'Enter user' })}>
          <option value="" hidden> users </option>
          {users.map((elm: IUser) => {
            return (
              <option value={elm.name} key={elm.id}>
                {elm.name} {elm.surname}
            </option>
            );
          })}
        </select>
        {errors.userId && <p>{errors.userId.message}</p>}
        <br />
        <br />
        <button>Save</button>
      </form>
    </div>
  );
});
