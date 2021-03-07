import React from 'react';
import AppLayout from '../components/AppLayout';
import { Box, Button } from '@material-ui/core';

import { getSortedPosts } from '../lib/posts';

const Home = ({ allPostsData }) => {
	return (
		<AppLayout>
			<Button variant="contained" color="primary">
				Button Test
			</Button>
			<div>Hello, Next!</div>
			<div>
				{allPostsData.map(({ slug, date, title, excerpt }) => (
					<Box variant="containers.postCard" sx={{ my: '0.5rem' }} key={slug}>
						<li>{slug}</li>
						<li>{date}</li>
						<li>{title}</li>
						<li>{excerpt}</li>
					</Box>
				))}
			</div>
		</AppLayout>
	);
};

export default Home;

export async function getStaticProps() {
	const allPostsData = getSortedPosts();
	return {
		props: {
			allPostsData,
		},
	};
}
