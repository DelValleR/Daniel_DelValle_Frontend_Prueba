import TopWrapper from '../../components/TopWrapper';
import Form from '../../components/Form';
import styles from './Home.scss';

const Home = () => {
	return (
		<div className={styles.App}>
			<TopWrapper />
			<Form />
		</div>
	);
};

export default Home;
