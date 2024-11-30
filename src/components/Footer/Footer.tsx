import styles from './Footer.module.scss';

export const Footer = () => {
	return (
		<footer>
			<nav>
				<ul className={styles.items}>
					<li>Home</li>
					<li>News</li>
					<li>Contacts</li>
				</ul>
			</nav>
		</footer>
	);
};
