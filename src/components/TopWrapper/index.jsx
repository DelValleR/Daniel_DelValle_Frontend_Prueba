import Banner from '../Banner';
import Header from '../Header';
import './TopWrapper.scss';

const TopWrapper = () => {
	return (
		<div className="top-wrapper">
			<Header />
			<Banner />
		</div>
	);
};

export default TopWrapper;
