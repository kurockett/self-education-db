import React, { ReactElement } from 'react';
import { Navbar } from './components/Navbar';
import { AppRoutes } from './routes';
import { GRAPHQL_URL } from './utils/index';

const App: React.FC = (): ReactElement => {
  console.log(GRAPHQL_URL);
  return (
    <>
      <Navbar />
      <AppRoutes />
    </>
  );
};

export default App;
