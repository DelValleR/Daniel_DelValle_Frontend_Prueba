import TopWrapper from '../../components/TopWrapper';
import InputWrapper from '../../components/InputWrapper';
import styles from './Home.scss';

const Home = () => {
	return (
		<div className={styles.App}>
			<TopWrapper />
			<InputWrapper />
		</div>
	);
};

export default Home;
