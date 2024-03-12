import React from 'react';
import './Footer.scss';

const Footer = () => {
	return (
		<footer className="footer">
			<div className="columns">
				<div className="column">
					<h3>Lorem ipsum dolor amet</h3>
					<p>consectetur adipsicng elit. Quisque eu consectetur mi</p>
				</div>
				<div className="column">
					<h3>Lorem ipsum dolor amet</h3>
					<p>consectetur adipsicng elit. Quisque eu consectetur mi</p>
				</div>
				<div className="column">
					<h3>Lorem ipsum dolor amet</h3>
					<p>consectetur adipsicng elit. Quisque eu consectetur mi</p>
				</div>
			</div>
			<div className="link">
				<p className="paragraph">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
					<a href="#" className="anchor" onClick={() => console.log('footer link')}>
						Link here
					</a>{' '}
					Lorem ipsum
				</p>
			</div>
		</footer>
	);
};

export default Footer;
