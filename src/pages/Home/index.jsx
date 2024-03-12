import TopWrapper from '../../components/TopWrapper';
import InputWrapper from '../../components/InputWrapper';
import Carousel from '../../components/Carousel';
import styles from './Home.scss';

const Home = () => {
	return (
		<div className={styles.App}>
			<TopWrapper />
			<Carousel />
			<InputWrapper />
		</div>
	);
};

export default Home;
