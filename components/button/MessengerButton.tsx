// components/MessengerButton.tsx

import { FC } from 'react';
import FbMess from '../../public/fbmess.png';
import Image from "next/image";
import styles from "../about/RingPhone.module.css";

const MessengerButton: FC = () => {
  const openMessenger = () => {
    window.open('https://m.me/147995528391633', '_blank');
  };

  return (

            <div className={styles.helpContainer}>
      <div className={styles.phoneRing}>
        <div className={styles.phoneRingCircle}></div>
        <div className={styles.phoneRingCircleFill}>
        <button
      onClick={openMessenger}
    >
        <Image src={FbMess} alt="face-book icon" width={50} height={50} />
        </button>

        </div>
      </div>
    </div>

  );
};

export default MessengerButton;
