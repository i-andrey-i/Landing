
import styles from './About.module.scss'
import machine from '../../../public/aboutIMG.png?url'

const About = () =>{

    return (
			<div className={styles.page}>
				<h1 className={styles.main}>Станки с ЧПУ для ваших задач</h1>
				<div className={styles.text}>
					<p>
						Мы специализируемся на поставках, обслуживании и модернизации
						станков с числовым программным управлением.
					</p>
					<p>
						Наша компания работает на рынке металлообработки более 10 лет и за
						это время зарекомендовала себя как надежный партнер для предприятий
						различного масштаба.
					</p>
				</div>

				<div className={styles.photo}>
					<img src={machine} alt='Станок' />
					<img src={machine} alt='Станок' />
				</div>
			</div>
		)
}

export default About