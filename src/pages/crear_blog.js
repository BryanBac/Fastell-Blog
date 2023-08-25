import { useEffect, useState } from "react";
import HomeBar from "@/components/home_bar";
import styles from '@/styles/blog.module.css'
import enviar from "./api/firebase/post-data";
import { useRouter } from 'next/router';

export default function VerBlog() {
    const [titulo, setTitulo] = useState("")
    const [contenido, setContenido] = useState("")
    const [fecha, setFecha] = useState("")
    const [read, setRead] = useState(true)
    const [autor, setAutor] = useState("")
    const [currentDate, setCurrentDate] = useState(getFormattedDate());
    const router = useRouter()

    function getFormattedDate() {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const yyyy = today.getFullYear();
        return `${dd}/${mm}/${yyyy}`;
    }
    useEffect(() => {
        if (typeof window !== 'undefined' && window.sessionStorage) {
            setContenido(sessionStorage.getItem('contenido'))
            setTitulo(sessionStorage.getItem('titulo'))
            setFecha(sessionStorage.getItem('fecha'))
            setRead(sessionStorage.getItem('lectura'))
            setAutor(sessionStorage.getItem('usuario'))
        }
    }, [])
    const enviarData = () => {
        let data = {
            titulo: titulo,
            contenido: contenido,
            fecha: currentDate,
            autor: autor
        }
        enviar("articulos", data)
        router.push("/")
    }
    return (<>
        <HomeBar enlace="/"></HomeBar>
        <div className={styles.grid}>
            <div>
                <div className={styles.contenidoContainer}>
                    <input className={styles.tituloContenido} value={titulo} onChange={(event) => setTitulo(event.target.value)}></input>
                </div>
                <div className={styles.contenidoContainer}>
                    <textarea
                        className={styles.contenido}
                        value={contenido}
                        onChange={(event) => setContenido(event.target.value)}>
                    </textarea>
                </div>
            </div>
            <div className={styles.alinear}>
                <button className={styles.boton} onClick={() => {
                    enviarData()
                }}>Crear</button>
            </div>
        </div>
    </>)
}