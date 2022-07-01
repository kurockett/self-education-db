import { gql } from '@apollo/client';

export const GET_EMPLOYEES = gql`
  query GET_EMPLOYEES {
    employees {
      data {
        id
        attributes {
          name
          surname
          age
          main_pl
        }
      }
    }
  }
`;

export const GET_EMPLOYEE = gql`
  query GET_EMPLOYEE($id: ID!) {
    employee(id: $id) {
      data {
        id
        attributes {
          name
          surname
          age
          main_pl
        }
      }
    }
  }
`;

export const CREATE_NEW_EMPLOYEE = gql`
  mutation CREATE_NEW_EMPLOYEE($data: EmployeeInput!) {
    createEmployee(data: $data) {
      data {
        attributes {
          main_pl
          name
          age
          surname
        }
      }
    }
  }
`;
