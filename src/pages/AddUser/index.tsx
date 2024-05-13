import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { IUser } from '../../type/type';
import { addUser } from '../../store/user/action';

export const AddUser: React.FC = React.memo((): JSX.Element => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IUser>();
  const save = (data: IUser): void => {
    dispatch(addUser({ ...data, id: Date.now() }));
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(save)}>
        <h2>Add User</h2>
        <label>name</label>
        <br />
        <input
          type="text"
          placeholder="name"
          {...register('name', { required: 'Enter name' })}
        />
        {errors.name && <p>{errors.name.message}</p>}
        <br />
        <br />
        <label>surname</label>
        <br />
        <input
          type="text"
          placeholder="surname"
          {...register('surname', { required: 'Enter surname' })}
        />
        {errors.surname && <p>{errors.surname.message}</p>}
        <br />
        <br />
        <label>age</label>
        <br />
        <input
          type="text"
          placeholder="age"
          {...register('age', {
            required: 'Enter age',
            pattern: { value: /^\d+$/, message: 'NaN' },
          })}
        />
        {errors.age && <p>{errors.age.message}</p>}
        <br />
        <br />
        <label>email</label>
        <br />
        <input
          type="text"
          placeholder="email"
          {...register('email', {
            required: 'Enter email',
            pattern: {
              value: /^[a-zA-Z0–9._-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,4}$/,
              message: 'NaE',
            },
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}
        <br />
        <br />
        <button>save</button>
      </form>
    </div>
  );
});
