export interface IEmployee {
  id: string;
  attributes: IEmployeeAttrs;
}

export interface IEmployeeAttrs {
  name: string;
  surname: string;
  age: number;
  main_pl: string;
}
