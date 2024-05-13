import React from 'react';

export const MyError: React.FC = React.memo((): JSX.Element => {
  return (
    <div>
      <h2>MyError Page</h2>
      <h3>Oops!</h3>
      <h4>Error 404</h4>
      <p>I'm so sorry, but ur page is not definded</p>
    </div>
  );
});
