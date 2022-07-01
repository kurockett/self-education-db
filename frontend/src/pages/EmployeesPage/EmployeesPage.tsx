import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { IEmployee } from './interfaces';
import { GET_EMPLOYEES } from './queries';

const EmployeePage: React.FC = (): ReactElement => {
  const { data, loading, error } = useQuery(GET_EMPLOYEES);
  const employees: IEmployee[] = data?.employees?.data;
  if (loading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <div>
      {employees.map((employee: IEmployee) => (
        <div key={employee.id}>
          <Link to={`/employees/${employee.id}`}>
            {employee.attributes.name} {employee.attributes.surname} (
            {employee.attributes.age}, {employee.attributes.main_pl})
          </Link>
        </div>
      ))}
    </div>
  );
};

export default EmployeePage;
