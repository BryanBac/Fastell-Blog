import styles from '@/styles/tarjeta_preview.module.css'

export default function Tarjeta(props){
    const {data, fecha} = props;
    return (
        <div className='superCentrar'>
            <div className={styles.grid}>
            <div className={styles.linea}></div>
            <div className={styles.segundo}>
                {data.titulo}
            </div>
        </div>
        </div>
    )
}