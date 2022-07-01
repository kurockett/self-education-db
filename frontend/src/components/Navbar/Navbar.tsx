import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar: React.FC = (): ReactElement => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <h1 className={styles.title}>Test App</h1>
        <ul className={styles.list}>
          <li className={styles.link}>
            <NavLink className={styles.link} to={'/employees'}>
              Employess
            </NavLink>
          </li>
          <li className={styles.link}>1</li>
          <li className={styles.link}>2</li>
          <li className={styles.link}>3</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
