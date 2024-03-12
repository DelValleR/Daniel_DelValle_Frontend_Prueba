import React from 'react';
import Navbar from '../Navbar';
import './Header.scss';

const Header = () => {
	const handleGoThereClick = () => {
		console.log('Go There');
	};

	return (
		<header className="header">
			<Navbar />
			<div className="header-container">
				<h1 className="title">Lorem ipsum</h1>
				<h3 className="subtitle">Neque porro quisquam</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, numquam reprehenderit.
					Recusandae fugiat consectetur repellat voluptate illo, perspiciatis, distinctio autem
					reiciendis officiis quasi excepturi minus velit obcaecati. Illum, esse facilis.
				</p>
				<button className="banner-button" onClick={handleGoThereClick}>
					<p>Go There...</p>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						class="arrowbtn"
					>
						<path
							fill-rule="evenodd"
							d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
							clip-rule="evenodd"
						/>
					</svg>
				</button>
			</div>
		</header>
	);
};

export default Header;
