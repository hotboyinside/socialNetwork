import styles from './Header.module.scss';

export const Header = () => {
	return (
		<header>
			<nav>
				<ul className={styles.items}>
					<li>Home</li>
					<li>News</li>
					<li>Contacts</li>
				</ul>
			</nav>
		</header>
	);
};
