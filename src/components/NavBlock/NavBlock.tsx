import styles from './NavBlock.module.scss'

interface NavItem {
	id: string
	label: string
}

function NavBlock() {
	const navItems: NavItem[] = [
		{ id: 'title', label: 'Блок 1' },
		{ id: 'about', label: 'Блок 2' },
		{ id: 'advantages', label: 'Блок 3' },
        { id: 'clients', label: 'Блок 4' },
		{ id: 'products', label: 'Блок 5' },
	]

	return (
		<nav className={styles.navigation}>
			{navItems.map(item => (
				<p key={item.id} data-section={item.id} className={styles.navItem}>
					{item.label}
				</p>
			))}
		</nav>
	)
}

export default NavBlock
