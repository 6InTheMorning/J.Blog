import React from 'react';
import PropTypes from 'prop-types';
import { CssBaseline, Typography, Container } from '@material-ui/core';
import Header from '../components/Header';

const AppyLayout = ({ children }) => {
	const sections = [
		{ title: 'Technology', url: 'show' },
		{ title: 'Design', url: '/' },
		{ title: 'Culture', url: 'show' },
		{ title: 'Business', url: '/' },
		{ title: 'Politics', url: 'show' },
		{ title: 'Opinion', url: '/' },
		{ title: 'Science', url: 'show' },
		{ title: 'Health', url: '/' },
		{ title: 'Style', url: 'show' },
		{ title: 'Travel', url: '/' },
	];

	return (
		<>
			<Container maxWidth="lg">
				<Header title="J.Blog" sections={sections} />
				{/* <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} /> */}
				{children}
			</Container>
		</>
	);
};

AppyLayout.propTypes = {
	children: PropTypes.node.isRequired,
};
export default AppyLayout;
