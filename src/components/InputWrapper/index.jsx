import { useState } from 'react';
import Form from '../Form';
import RadioInput from '../RadioInput';
import SelectInput from '../SelectInput';
import './InputWrapper.scss';

const InputWrapper = () => {
	const [selectedOption, setSelectedOption] = useState('');

	const handleOptionChange = (option) => {
		setSelectedOption(option);
	};

	const [selectedOptions, setSelectedOptions] = useState([]);

	const handleSelectChange = (options) => {
		setSelectedOptions(options);
	};
	return (
		<div className="wrapper">
			<SelectInput options={['Option 1', 'Option 2', 'Option 3']} onChange={handleSelectChange} />
			<RadioInput
				idPrefix="options"
				options={['Opción 1', 'Opción 2', 'Opción 3', 'Opción 4']}
				selectedOption={selectedOption}
				onChange={handleOptionChange}
			/>

			<Form />
		</div>
	);
};

export default InputWrapper;
