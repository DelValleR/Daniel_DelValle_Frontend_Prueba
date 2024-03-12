import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { string } from 'prop-types';
import './Card.scss';

export default function MediaCard({ img, title, content }) {
	return (
		<Card
			sx={{
				width: '300px',
				height: 'fit-content',
				backgroundColor: '#3C5973',
				borderRadius: '10px',
				padding: '20px',
			}}
		>
			<img src={img} alt="placeholder" className="card-img" />

			<CardContent sx={{ padding: '0' }}>
				<Typography
					gutterBottom
					variant="h5"
					component="div"
					color="#0C1726"
					fontWeight="bold"
					sx={{ margin: '30px' }}
				>
					{title}
				</Typography>
				<Typography variant="body2" color="white" textAlign="left">
					{content}
				</Typography>
			</CardContent>
		</Card>
	);
}

MediaCard.propTypes = {
	content: string,
	title: string,
	img: string,
};
