import styles from './Products.module.scss'
import loot1 from '../../../public/loot/loot1.png'
import loot2 from '../../../public/loot/loot2.png'
import loot3 from '../../../public/loot/loot3.png'
import loot4 from '../../../public/loot/loot4.png'
import Card from '../../components/Card/Card'


const Product = () =>{
    const cardsData = [
			{
				title: 'Jet 123 small',
				desc: 'Подойдет для малого бизнеса',
				pic: loot1,
			},
			{
				title: 'Jet 123 small v.9.1',
				desc: 'Новая версия, подойдет также для малого бизнеса',
				pic: loot1,
			},
			{
				title: 'Jet 123 small v.9.1',
				desc: 'Новая версия, подойдет также для малого бизнеса',
				pic: loot1,
			},
			{
				title: 'Ultra-Jet',
				desc: 'Подойдет для среднего бизнеса',
				pic: loot2,
			},
			{
				title: 'Ultra-Jet 12',
				desc: 'Подойдет для крупного бизнеса',
				pic: loot3,
			},
			{
				title: 'Ultra-Jet 123 v.9.0',
				desc: 'Подойдет для крупного бизнеса',
				pic: loot4,
			},
		]
    return (
			<div className={styles.block}>
				<div className={styles.text}>
					<h1 className={styles.title}>Модельный ряд</h1>
					<p className={styles.subtext}>
						Наш модельный ряд представлен следующим множеством различных станков
						с ЧПУ
					</p>
				</div>
				<div className={styles.models}>
                    {cardsData.map((card, index)=>(
                        <Card 
                            key={index}
                            title={card.title}
                            desc={card.desc}
                            pic={card.pic.src}
                        />
                    ))}

                </div>
			</div>
		)
}

export default Product