import React from 'react';
import { useRoutes } from 'react-router-dom';
import { Layout } from '../pages/Layout';
import { MyError } from '../pages/MyError';
import { Books } from '../pages/Books';
import { AddBook } from '../pages/AddBook';
import { BookDetails } from '../pages/BookDetails';
import { UserDetails } from '../pages/UserDetails';
import { Users } from '../pages/Users';
import { AddUser } from '../pages/AddUser';

export const MyRouter = React.memo(() => {
  const router = useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '', element: <Books /> },
        { path: 'addBook', element: <AddBook /> },
        { path: 'detailsBook/:id', element: <BookDetails /> },
        { path: 'users', element: <Users /> },
        { path: 'addUser', element: <AddUser /> },
        { path: 'detailsUser/:id', element: <UserDetails /> },
      ],
    },
    {
      path: '*',
      element: <MyError />,
    },
  ]);

  return router;
});
