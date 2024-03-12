import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { IconButton, useMediaQuery } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Slide from '@mui/material/Slide';
import Stack from '@mui/material/Stack';
import MediaCard from '../Card';
import placeholder from './placeholder-circle.png';

function Carousel() {
	const [cards, setCards] = useState([]);
	const [currentPage, setCurrentPage] = useState(0);
	const [slideDirection, setSlideDirection] = useState('right');
	const isDesktop = useMediaQuery('(min-width:1024px)');
	const isTablet = useMediaQuery('(min-width:768px)');
	const cardsPerPage = isDesktop ? 4 : isTablet ? 2 : 1;
	const cardInfo = {
		img: placeholder,
		title: 'Lorem Ipsum',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu consectetur mi. Sed nunc enim, facilisis et rhoncus id, rutrum id turpis. Ut nec gravida dui, quis placerat massa. Aenean vitae nibh eu neque finibus luctus.',
	};
	// Este es un array de prueba para renderizar la misma card 10 veces
	const duplicateCards = Array.from({ length: 10 }, (_, i) => (
		<MediaCard key={i} img={cardInfo.img} title={cardInfo.title} content={cardInfo.content} />
	));

	const handleNextPage = () => {
		setSlideDirection('left');
		setCurrentPage((prevPage) =>
			prevPage >= Math.ceil((cards.length || 0) / cardsPerPage) - 1 ? 0 : prevPage + 1
		);
	};

	const handlePrevPage = () => {
		setSlideDirection('right');
		setCurrentPage((prevPage) =>
			prevPage === 0 ? Math.ceil((cards.length || 0) / cardsPerPage) - 1 : prevPage - 1
		);
	};

	useEffect(() => {
		setCards(duplicateCards);
		// eslint-disable-next-line
	}, []);
	const containerWidth = cardsPerPage * 300;

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center',
				alignContent: 'center',
				justifyContent: 'center',
				width: '100%',
				paddingTop: '40px',
				paddingBottom: '40px',
			}}
		>
			<IconButton onClick={handlePrevPage}>
				<NavigateBeforeIcon />
			</IconButton>
			<Box sx={{ width: `${containerWidth}px`, height: '100%' }}>
				{cards.map((card, index) => (
					<Box
						key={`card-${index}`}
						sx={{
							width: '100%',
							height: '100%',
							display: currentPage === index ? 'block' : 'none',
						}}
					>
						<Slide direction={slideDirection} in={currentPage === index}>
							<Stack
								spacing={4}
								direction="row"
								alignContent="center"
								justifyContent="center"
								sx={{ width: '100%', height: '100%' }}
							>
								{cards.slice(index * cardsPerPage, index * cardsPerPage + cardsPerPage)}
							</Stack>
						</Slide>
					</Box>
				))}
			</Box>
			<IconButton onClick={handleNextPage}>
				<NavigateNextIcon />
			</IconButton>
		</Box>
	);
}

export default Carousel;
