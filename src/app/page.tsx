'use client'

import styles from "./page.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from 'next/link';

export default function Home() {
  
  const router = useRouter();

  const click = () => {
    router.push('/login');
  }

  return(
    <div className={styles.page}>
      <h1 className={styles.title}>Home</h1>
      <div className={styles.main}>
        <button onClick={click} className={styles.botao}>Login</button>
      </div>
    </div>
  );


}
