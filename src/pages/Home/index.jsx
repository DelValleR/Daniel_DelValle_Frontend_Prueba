import TopWrapper from '../../components/TopWrapper';
import InputWrapper from '../../components/InputWrapper';
import Carousel from '../../components/Carousel';
import styles from './Home.scss';
import Footer from '../../components/Footer';

const Home = () => {
	return (
		<div className={styles.App}>
			<TopWrapper />
			<Carousel />
			<InputWrapper />
			<Footer />
		</div>
	);
};

export default Home;
