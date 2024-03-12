import React from 'react';

const CheckInput = ({ label, checked, onChange }) => {
	return (
		<div>
			<label>
				<input type="checkbox" checked={checked} onChange={onChange} />
				{label}
			</label>
		</div>
	);
};

export default CheckInput;
