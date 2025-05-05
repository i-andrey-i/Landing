import styles from './Header.module.scss'
import logo from '../../../public/Logo.svg?url'
import NavBlock from '../../components/NavBlock/NavBlock'
import Button from '../../components/Button/Button'
import { FaArrowRight } from 'react-icons/fa'

function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<img src={logo} alt='Логотип' />
			</div>

			<NavBlock />
			<a href='#form' className={styles.contactLink}>
				<Button
					style={{
						color: '#7520E5',
						border: '2px solid #7520E5',
						backgroundColor: '#ffffff',
						padding: '1rem 2rem',
						marginRight: '5rem',
					}}
					rightIcon={<FaArrowRight color='#7520E5' />}
				>
					Связаться с нами
				</Button>
			</a>
		</header>
	)
}

export default Header
