import React, { ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { EmployeePage, EmployeesPage } from '../pages/EmployeesPage';
import { ErrorPage } from '../pages/ErrorPage';

const AppRoutes: React.FC = (): ReactElement => {
  return (
    <Routes>
      <Route path={'/employees'} element={<EmployeesPage />}>
        <Route path={':id'} element={<EmployeePage />} />
        <Route element={<EmployeesPage />} />
      </Route>
      <Route index element={<HomePage />} />
      <Route path={'*'} element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRoutes;
