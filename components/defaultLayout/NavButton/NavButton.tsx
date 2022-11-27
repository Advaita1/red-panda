import React, { FC } from 'react';
import Image from 'next/image';
import { useAppDispatch } from '@redux/hooks';
import { toggle } from '@redux/slices/navSlice';
import styles from './NavButton.module.css';
import PandaIcon from '../../../public/icons8-red-panda-96.png';

const NavButton: FC = () => {
  const dispatch = useAppDispatch();
  const clickHandler = () => {
    return (event: React.MouseEvent) => {
      dispatch(toggle());
      event.preventDefault();
    };
  };
  return (
    <div className={styles.container}>
      <button className={styles.imageContainer} onClick={clickHandler()} name="nav toggler">
        <Image src={PandaIcon} priority width={48} height={48} alt='red panda icon'/>
      </button>
    </div>
  );
};

export default NavButton;