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
    <div>
        <h1>Home</h1>
        <button onClick={click} className={styles.botao}>Login</button>
    </div>
  );


}
