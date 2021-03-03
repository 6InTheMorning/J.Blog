import React from 'react';
import AppLayout from '../components/AppLayout';
import { Button } from '@material-ui/core';
const Home = () => {
	return (
		<AppLayout>
			<Button variant="contained" color="primary">
				Button Test
			</Button>
			<div>Hello, Next!</div>
		</AppLayout>
	);
};

export default Home;
