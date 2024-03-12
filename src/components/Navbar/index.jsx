import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [subMenuVisible, setSubMenuVisible] = useState(false);

	const toggleSubMenu = () => {
		setSubMenuVisible(!subMenuVisible);
	};

	const menuRef = useRef();
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (menuRef.current && !menuRef.current.contains(event.target)) {
				setIsMenuOpen(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);
	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const navigate = useNavigate();
	return (
		<nav className="navbar">
			<div className="navbar-link">
				<button className="navlink" onClick={() => navigate('/')}>
					Home
				</button>
			</div>
			<div className="menu navbar-link" ref={menuRef}>
				<button className="navlink" onClick={toggleMenu}>
					Pages
				</button>
				{isMenuOpen && (
					<div className="submenu">
						<button className="navlink subnavlink">Page 1</button>
						<button className="navlink subnavlink">Page 2</button>
						<div className="thirdmenu">
							<button className="navlink subnavlink" onClick={toggleSubMenu}>
								Page 3
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									className="arrow"
								>
									<path
										fillRule="evenodd"
										d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
										clipRule="evenodd"
									/>
								</svg>
							</button>
							{subMenuVisible && (
								<div className="items-submenu">
									<button className="navlink subnavlink">Item 1</button>
									<button className="navlink subnavlink">Item 2</button>
									<button className="navlink subnavlink">Item 3</button>
								</div>
							)}
						</div>
					</div>
				)}
			</div>
			<div className="navbar-link">
				<button className="navlink" onClick={() => navigate('/about')}>
					About
				</button>
			</div>
			<div className="navbar-link">
				<button className="navlink" onClick={() => navigate('/contact')}>
					Contact
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
