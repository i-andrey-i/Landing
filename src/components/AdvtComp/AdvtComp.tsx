import styles from './AdvtComp.module.scss'
import icon from '../../../public/Icon.svg?url'

interface AdvtCompProps{
    title:string,
    subtitle: string
}

const AdvtComp:React.FC<AdvtCompProps> = ({title, subtitle}) =>{

    return(
        <div className={styles.block}>
            <img className={styles.image} src={icon} alt='Картинка'/>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.subtitle}>{subtitle}</p>
        </div>
    )
}

export default AdvtComp