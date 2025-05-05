import Button from '../../components/Button/Button'
import styles from './Title.module.scss'
import { FaArrowRight } from 'react-icons/fa'

const Title = () =>{
    const subtitle = 'Станки с ЧПУ по дереву, металлу или пластику – готовое решение под ключ'
    return (
			<div className={styles.title}>
				<h1 className={styles.main}>Самые лучшие станки с ЧПУ</h1>
				<p className={styles.subtitle}>{subtitle}</p>

				<a href='#form' className={styles.contactLink}>
					<Button
						style={{
							color: 'white',
							border: '2px solid #7520E5',
							backgroundColor: '#7520E5',
							margin: '0 auto',
							padding: '1rem 2rem',
						}}
						rightIcon={<FaArrowRight color='#white' />}
						children='Связаться с нами'
					/>
				</a>
			</div>
		)
}

export default Title