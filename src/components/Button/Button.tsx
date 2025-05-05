import React from 'react'
import styles from './Button.module.scss'

interface ButtonProps {
	style?: React.CSSProperties
	children?: React.ReactNode
	rightIcon?: React.ReactNode
	onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({
	style,
	children,
	rightIcon,
	onClick,
}) => {
	return (
		<button
			style={{
				display: 'flex',
				alignItems: 'center',
				gap: '8px',
				...style,
			}}
			className={styles.button}
			onClick={onClick}
		>
			<span>{children}</span>
			{rightIcon && <span className={styles.iconWrapper}>{rightIcon}</span>}
		</button>
	)
}

export default Button
