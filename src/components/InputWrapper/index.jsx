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

	const [selectedValue, setSelectedValue] = useState('');

	const handleChange = (event) => {
		setSelectedValue(event.target.value);
	};
	return (
		<div className="wrapper">
			<SelectInput
				options={[
					{ label: 'Opción 1', value: 'opcion1' },
					{ label: 'Opción 2', value: 'opcion2' },
					{ label: 'Opción 3', value: 'opcion3' },
					{ label: 'Opción 4', value: 'opcion4' },
				]}
				value={selectedValue}
				onChange={handleChange}
			/>
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
