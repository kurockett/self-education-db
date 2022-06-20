import React, { ReactElement } from 'react';
import { AppRoutes } from './routes';

const App: React.FC = (): ReactElement => {
  return (
    <div>
      <AppRoutes />
    </div>
  );
};

export default App;
