import React from 'react';
import './SelectInput.scss';

const SelectInput = ({ options, value, onChange }) => {
	return (
		<div className="select-input">
			<select className="select-option" value={value} onChange={onChange}>
				{options.map((option, index) => (
					<option className="options" key={index} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</div>
	);
};

export default SelectInput;
