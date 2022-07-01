import React, { ReactElement } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { CREATE_NEW_EMPLOYEE, GET_EMPLOYEE } from './queries';
import styles from './EmployeePage.module.css';
import { IEmployeeAttrs } from './interfaces';

const EmployeePage: React.FC = (): ReactElement => {
  const { id } = useParams();
  const { data, loading, error } = useQuery(GET_EMPLOYEE, {
    variables: {
      id,
    },
  });
  const employee: IEmployeeAttrs = data?.employee?.data?.attributes;
  // const [createEmployee] = useMutation(CREATE_NEW_EMPLOYEE, {
  //   variables: {
  //     data: {
  //       name: 'Дима',
  //       surname: 'Димитрович',
  //       age: 44,
  //       main_pl: 'Ruby',
  //     },
  //   },
  // });
  console.log(data);
  if (loading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <div className={styles.container}>
      <p>{employee.surname}</p>
      <p>{employee.name}</p>
      <p>{employee.age}</p>
      <p>{employee.main_pl}</p>
    </div>
  );
};

export default EmployeePage;
