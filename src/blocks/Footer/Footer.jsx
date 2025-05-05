import React from 'react'
import styles from './Footer.module.scss'
import NavBlock from '../../components/NavBlock/NavBlock'
import logo from '../../../public/Logo.svg?url'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footerContainer}>
				<div className={styles.leftSection}>
					<div className={styles.logo}><img src={logo} alt='Логотип'/></div>
					<div className={styles.copyright}>© 2025 OOO Рога и Копыта</div>
				</div>

				<div className={styles.navWrapper}>
					<NavBlock className={styles.navBlock} />
				</div>
			</div>
		</footer>
	)
}

export default Footer
