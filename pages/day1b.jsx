import React from 'react';
import Image from 'next/image';
import styles from './day1b.module.css';

export default function Day1b() {
  return (
    <div className={styles.container}>
      <div className={styles.navBar} />
      <h1>Day 1 Bonus Challenge</h1>
      <div>
        The Hero is..
        <Image src="/superman.jpg" height={100} width={100} />
      </div>
    </div>
  );
}
