import React, { FC } from 'react';
import Image from 'next/image';
import styles from './NavButton.module.css';
import PandaIcon from '../../../public/icons8-red-panda-96.png';

interface NavButtonProps {
  navToggler: Function;
}

const NavButton: FC<NavButtonProps> = ({ navToggler }) => {
  const clickHandler = () => {
    return (event: React.MouseEvent) => {
      navToggler();
      event.preventDefault();
    };
  };
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer} onClick={clickHandler()}>
        <Image src={PandaIcon} priority width={48} height={48} alt='red panda icon'/>
      </div>
    </div>
  );
};

export default NavButton;