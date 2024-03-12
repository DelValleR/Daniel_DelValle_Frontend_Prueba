import React, { useState } from 'react';
import './Form.scss';

const Form = () => {
	const [nombre, setNombre] = useState('');
	const [correo, setCorreo] = useState('');
	const [textoResultado, setTextoResultado] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		const resultado = `Nombre: ${nombre}\nCorreo: ${correo}`;
		setTextoResultado(resultado);
	};

	return (
		<div className="formulario-container">
			<form onSubmit={handleSubmit}>
				<div className="input-group">
					<label htmlFor="nombre">Name:</label>
					<input
						type="text"
						id="nombre"
						value={nombre}
						onChange={(e) => setNombre(e.target.value)}
					/>
				</div>
				<div className="input-group">
					<label htmlFor="correo">Email:</label>
					<input
						type="email"
						id="correo"
						value={correo}
						onChange={(e) => setCorreo(e.target.value)}
					/>
				</div>
				<div className="resultado-container">
					<textarea value={textoResultado} readOnly />
				</div>
				<button className="btnsubmit" type="submit">
					Submit
				</button>
			</form>
		</div>
	);
};

export default Form;
