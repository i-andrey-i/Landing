import styles from './Form.module.scss'
import chat from '../../../public/Chat.png?url'
import Button from '../../components/Button/Button'

const Form = () => {
	return (
		<div className={styles.block} id='form'>
			<div className={styles.form}>
				<h1 className={styles.title}>Оставьте заявку</h1>
				<p className={styles.subtitle}>
					Для получения персональной консультации
				</p>

				<form className={styles.formContent}>
					<div className={styles.formGroup}>
						<input
							type='text'
							placeholder='Имя Фамилия'
							className={styles.input}
							required
						/>
					</div>

					<div className={styles.formGroup}>
						<input
							type='email'
							placeholder='Почта'
							className={styles.input}
							required
						/>
					</div>

					<div className={styles.formGroup}>
						<input
							type='txt'
							placeholder='Запрос'
							className={styles.input}
							required
						/>
					</div>

					<div className={styles.formGroup}>
						<input
							type='txt'
							placeholder='Выберите услуги'
							className={styles.input}
							required
						/>
					</div>

					<p className={styles.warning}>
						Отправляя заявку, вы принимаете{' '}
						<span className={styles.link}>
							соглашение на обработку персональных данных
						</span>
					</p>

					<Button
						style={{
							color: 'white',
							border: '2px solid #7520E5',
							backgroundColor: '#7520E5',
							margin: '0 auto',
							padding: '1rem 2rem',
						}}
						children='Отправить'
					/>
				</form>
			</div>

			<div className={styles.chatImage}>
				<img src={chat} alt='Чат' />
			</div>
		</div>
	)
}

export default Form
