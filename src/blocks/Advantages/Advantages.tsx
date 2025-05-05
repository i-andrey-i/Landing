import AdvtComp from '../../components/AdvtComp/AdvtComp'
import styles from './Advantages.module.scss'

const Advantages = () =>{
    const text =
			'Наша компания работает на рынке металлообработки более 10 лет и за это время зарекомендовала себя как надежный партнер для предприятий различного масштаба.'
    return (
			<div className={styles.block}>
				<div className={styles.textBlock}>
					<h1 className={styles.title}>Преимущества работы с нами</h1>
					<p className={styles.subtitle}>{text}</p>
				</div>
				<div>
					<AdvtComp title={'Прямые поставки'} subtitle={'от ведущих производителей'} />
					<AdvtComp title={'До 36 месяцев'} subtitle={'гарантия на оборудование'} />
					<AdvtComp title={'Обучение персонала'} subtitle={'работа на станках'} />
				</div>
			</div>
		)
}

export default Advantages