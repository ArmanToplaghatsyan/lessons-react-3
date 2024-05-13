import { IUser } from '../../type/type';

export const data: { users: IUser[]; user: IUser } = {
  users: [
    {
      id: 1,
      name: 'Ani',
      surname: 'Annyan',
      age: 16,
      email: 'ani1A@test1.com',
    },
    {
      id: 2,
      name: 'Anahit',
      surname: 'Sargsyan',
      age: 17,
      email: 'ani2S@test2.com',
    },
    {
      id: 3,
      name: 'Levon',
      surname: 'Miqaelyan',
      age: 18,
      email: 'levon3M@test3.com',
    },
    {
      id: 4,
      name: 'Ebrat',
      surname: 'Araqelyan',
      age: 20,
      email: 'ebrat4A@test4.com',
    },
    {
      id: 5,
      name: 'Mimi',
      surname: 'Sanosyan',
      age: 19,
      email: 'mimi5S@test5.com',
    },
  ],
  user: {} as IUser,
};
