import styles from './Card.module.scss'

interface CardProps{
    title: string,
    desc: string,
    pic: string
}

const Card:React.FC<CardProps> = ({title, desc, pic }) =>{

    return (
			<div className={styles.card}>
				<img className={styles.img} src={pic} alt='Картинка' />
				<div className={styles.txtblock}>
					<h1 className={styles.title}>{title}</h1>
					<p className={styles.desc}>{desc}</p>
				</div>
			</div>
		)
}

export default Card