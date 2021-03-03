import React, { useEffect } from 'react';
import Head from 'next/head';

import Router from 'next/router';
import AppLayout from '../components/AppLayout';
// import style from '../scss/show.module.scss';
// import '../styles/show.scss';

const show = () => {
	return (
		<>
			<Head>
				<title>SHOW | J.Blog</title>
			</Head>
			<AppLayout>
				<div>SHOW ME THE MONEY</div>
			</AppLayout>
		</>
	);
};

export default show;
