'use client'

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Home() {
  const [user, setUser] = useState("");
  const [senha, setSenha] = useState("");
  const [erroLogin, setErroLogin] = useState(false);

  const autenticar = () => {
    if (user !== "teste" || senha !== "teste123"){
      setErroLogin(true)
    }else{
      setErroLogin(false)
    }
  }

  return(
    <div>
        <h1>Login</h1>
        <input className={styles.input} type="text" value={user} placeholder="Nome de usuário" onChange={(e) => setUser(e.target.value)}/>
        <input className={styles.input} type="text" value={senha} placeholder="Senha" onChange={(e) => setSenha(e.target.value)}/>
        <button className={styles.botao} onClick={autenticar}>Login</button>

        {erroLogin && (
        <div className={styles.autenticar}>
          <h2>Não foi possível realizar o Login</h2>
          <p>Usuário ou Senha inválidos</p>
        </div>
      )}
    </div>
  );


}
