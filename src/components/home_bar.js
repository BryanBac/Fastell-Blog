import styles from '@/styles/Home_Bar.module.css'
import HomeIcon from '@mui/icons-material/Home';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InputIcon from '@mui/icons-material/Input';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function HomeBar(props) {
    const { enlace } = props;
    const [acceso, setAcceso] = useState(false)
    const [mostrar, setMostrar] = useState(false)
    const [textoBoton, setTextoBoton] = useState(false)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            try {
                const acceso = sessionStorage.getItem("acceso");
                if (acceso === "true") {
                    setAcceso(true)
                    setMostrar(true)
                    setTextoBoton(true)
                }
            } catch (error) {
                // Manejo de error si es necesario
            }
        }
    }, []);

    return (
        <div className={styles.inicio}>
            <Link className={styles.boton} href={enlace}>
                <ArrowBackIosIcon></ArrowBackIosIcon>
                <div className={styles.letras}>Regresar</div>
            </Link>
            <Link className={styles.boton} href="/">
                <HomeIcon></HomeIcon>
                <div className={styles.letras}>Inicio</div>
            </Link>
            <div className={styles.flex}>
                {mostrar === true &&
                    <Link className={styles.boton2} href="crear_blog">
                        <div className={styles.derecha}
                            onClick={() => {
                                sessionStorage.setItem("contenido", "")
                                sessionStorage.setItem("titulo", "")
                                sessionStorage.setItem("fecha", "")
                                sessionStorage.setItem("lectura", false)
                            }}>
                            <AccountCircleIcon></AccountCircleIcon>
                            <div className={styles.letras}>Crear</div>
                        </div>
                    </Link>
                }
                <Link className={styles.boton2} href="login">
                    <div className={styles.derecha} onClick={() => {
                        setAcceso(false)
                        sessionStorage.setItem("acceso", false)
                        setTextoBoton(false) // Cambia el valor del textoBoton al cerrar sesión
                    }}>
                        <InputIcon></InputIcon>
                        <div className={styles.letras}>{textoBoton === true ? "Cerrar Sesión" : "Iniciar Sesión"}</div>
                    </div>
                </Link>
            </div>
        </div>
    );
}
