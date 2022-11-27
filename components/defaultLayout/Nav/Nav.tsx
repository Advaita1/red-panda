import React, { FC } from 'react';
import { StaticImageData } from 'next/image';
import { NavButton, Carousel } from '@components/defaultLayout';
import styles from './Nav.module.css';
import RedPanda1 from '../../../assets/images/red-panda-1.jpg';
import RedPanda2 from '../../../assets/images/red-panda-2.jpg';
import RedPanda3 from '../../../assets/images/red-panda-3.jpg';
import RedPanda4 from '../../../assets/images/red-panda-4.jpg';
import RedPanda5 from '../../../assets/images/red-panda-5.jpg';

const pandas: StaticImageData[] = [
  RedPanda1,
  RedPanda2,
  RedPanda3,
  RedPanda4,
  RedPanda5
];

const Nav: FC = () => {
  return (
    <nav className={styles.nav}>
      <Carousel images={pandas}/>
      <NavButton/>
    </nav>
  );
};

export default Nav;