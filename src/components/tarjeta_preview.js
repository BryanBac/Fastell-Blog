import styles from '@/styles/tarjeta_preview.module.css'
import { useRouter } from 'next/router';

export default function Tarjeta(props) {
    const { data, fecha } = props;
    console.log("En tarjeta", data)
    const router = useRouter()
    return (
        <div className='superCentrar'>
            <button className={styles.grid} onClick={()=>{
                sessionStorage.setItem("contenido", data.contenido)
                sessionStorage.setItem("titulo", data.titulo)
                sessionStorage.setItem("fecha", data.fecha)
                sessionStorage.setItem("lectura", true)
                router.push("ver_blog")
            }}>
                <div className={styles.linea}></div>
                <div className={styles.segundo}>
                    {data.titulo}
                </div>
            </button>
        </div>
    )
}