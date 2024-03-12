import React, { useState } from 'react';
import './SelectInput.scss';

const SelectInput = ({ options, onChange }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOptions, setSelectedOptions] = useState([]);

	const toggleOpen = () => {
		setIsOpen(!isOpen);
	};

	const handleOptionChange = (option) => {
		const index = selectedOptions.indexOf(option);
		if (index === -1) {
			setSelectedOptions([...selectedOptions, option]);
		} else {
			setSelectedOptions([...selectedOptions.slice(0, index), ...selectedOptions.slice(index + 1)]);
		}
	};

	return (
		<div className="select">
			<button className="select-input" onClick={toggleOpen}>
				Select
			</button>
			{isOpen && (
				<div className="select-option">
					{options.map((option, index) => (
						<label className="options" key={index}>
							<input
								type="checkbox"
								checked={selectedOptions.includes(option)}
								onChange={() => handleOptionChange(option)}
							/>

							{option}
						</label>
					))}
				</div>
			)}
		</div>
	);
};

export default SelectInput;
