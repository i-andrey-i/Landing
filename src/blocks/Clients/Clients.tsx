import styles from './Clients.module.scss'
import logo1 from '../../../public/urfu.svg?url'
import logo2 from '../../../public/urfulogo.svg?url'
import logo3 from '../../../public/yandex.svg?url'
import logo4 from '../../../public/google.svg?url'
 
const Clients = () =>{

    return (
			<div className={styles.page}>
				<h1 className={styles.title}>Нам доверяют</h1>
				<div className={styles.logos}>
					<img src={logo1} alt='Логотип' />
					<img src={logo2} alt='Логотип' />
					<img src={logo3} alt='Логотип' />
					<img src={logo4} alt='Логотип' />
				</div>
			</div>
		)
}

export default Clients