import React, { FC, useState } from 'react';
import { StaticImageData } from 'next/image';
import styles from './Landing.module.css';
import { MainImage, NavButton, Carousel } from '@components/landing';
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

const Landing: FC = () => {
  const [selectedPanda, setSelectedPanda] = useState(pandas[0]);
  const [navToggled, setNavToggled] = useState(false);
  const toggleNav = () => {
    setNavToggled(!navToggled);
  };
  return (
    <div className={styles.body}>
      <MainImage src={selectedPanda} navToggled={navToggled} setNavToggled={setNavToggled}/>
      <NavButton navToggler={toggleNav}/>
      <Carousel navToggled={navToggled} pandas={pandas} toggleNav={toggleNav} setSelectedPanda={setSelectedPanda}/>
    </div>
  );
};

export default Landing;