import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import Head from "next/head";
import HomeBar from "@/components/home_bar";
import styles from "../styles/login.module.css";
import autenticar from "./api/auth/auth";
import hashPassword from "./api/auth/hash";
import enviar from "./api/firebase/post-data";
import { useRouter } from "next/router";

export default function Home() {
    const [usuario, setUsuario] = useState("");
    const [contra, setContra] = useState("");
    const [paso, setPaso] = useState(false);
    const router = useRouter()
    
    const enviarInfo = async (e) => {
        e.preventDefault();
        let x = await autenticar(usuario, contra);
        setPaso(x)
        // enviar("usuarios", {user: usuario, password: hashPassword(contra)})
        // setPaso(true)
    };

    useEffect(()=>{
        if(paso === true){
            sessionStorage.setItem("acceso", true);
            sessionStorage.setItem("usuario", usuario);
            router.push("/")
        }
    }, [paso])

    return (
        <div>
            <Head>
                <title>Iniciar Sesión</title>
            </Head>
            <HomeBar enlace="/"></HomeBar>
            <div className={styles.body}>
                <form className={styles.container} onSubmit={enviarInfo}>
                    <div className={styles.ingreso}>
                        <span>Usuario:</span>
                        <input
                            className={styles.input}
                            onChange={(e) => setUsuario(e.target.value)}
                            value={usuario}
                        ></input>
                    </div>
                    <div className={styles.ingreso}>
                        <span>Contraseña:</span>
                        <input
                            className={styles.input}
                            type="password"
                            onChange={(e) => setContra(e.target.value)}
                            value={contra}
                        ></input>
                    </div>
                    <button className={styles.boton} type="submit">
                        Iniciar Sesión
                    </button>
                </form>
            </div>
        </div>
    );
}
