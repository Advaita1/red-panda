import React, { FC } from 'react';
import styles from './Landing.module.css';
import { MainImage } from '@components/landing';

const Landing: FC = () => {
  return (
    <div className={styles.body}>
      <MainImage/>
    </div>
  );
};

export default Landing;