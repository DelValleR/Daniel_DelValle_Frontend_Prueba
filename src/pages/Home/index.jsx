import TopWrapper from '../../components/TopWrapper';
import Form from '../../components/Form';
import styles from './Home.scss';
import RadioInput from '../../components/RadioInput';
import { useState } from 'react';

const Home = () => {
	const [selectedOption, setSelectedOption] = useState('');

	const handleOptionChange = (option) => {
		setSelectedOption(option);
	};
	return (
		<div className={styles.App}>
			<TopWrapper />
			<Form />
			<RadioInput
				idPrefix="options"
				options={['Opción 1', 'Opción 2', 'Opción 3', 'Opción 4']}
				selectedOption={selectedOption}
				onChange={handleOptionChange}
			/>
		</div>
	);
};

export default Home;
