import { useEffect, useState } from "react";
import HomeBar from "@/components/home_bar";
import styles from '@/styles/blog.module.css'

export default function VerBlog() {
    const [titulo, setTitulo] = useState("")
    const [contenido, setContenido] = useState("")
    const [fecha, setFecha] = useState("")
    const [read, setRead] = useState(true)
    useEffect(() => {
        if (typeof window !== 'undefined' && window.sessionStorage) {
            setContenido(sessionStorage.getItem('contenido'))
            setTitulo(sessionStorage.getItem('titulo'))
            setFecha(sessionStorage.getItem('fecha'))
            setRead(sessionStorage.getItem('lectura'))
        }
    }, [])
    return (<>
        <HomeBar enlace="/"></HomeBar>
        <div>
            <h1 className={styles.titulo}>{titulo}</h1>
            <div className={styles.contenidoContainer}>
                <textarea
                    className={styles.contenido}
                    value={contenido}
                    readOnly={true}
                    onChange={(event) => setContenido(event.target.value)}>
                </textarea>
            </div>
        </div>
    </>)
}