import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Toolbar, Button, IconButton, Typography } from '@material-ui/core';
import Link from '../src/Link';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
	toolbar: {
		borderBottom: `1px solid ${theme.palette.divider}`,
	},
	toolbarTitle: {
		flex: 1,
	},
	toolbarSecondary: {
		justifyContent: 'space-between',
		overflowX: 'auto',
	},
	toolbarLink: {
		padding: theme.spacing(1),
		flexShrink: 0,
	},
}));

const Header = ({ sections, title }) => {
	const classes = useStyles();
	return (
		<>
			<Toolbar className={classes.toolbar}>
				<Button size="small">Subscribe</Button>
				<Typography
					component="h2"
					variant="h5"
					color="inherit"
					align="center"
					noWrap
					className={classes.toolbarTitle}
				>
					{title}
				</Typography>
				<IconButton>
					<SearchIcon />
				</IconButton>
				<Button variant="outlined" size="small">
					Sign Up
				</Button>
			</Toolbar>
			<Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
				{sections.map(section => (
					<Link
						color="inherit"
						noWrap
						key={section.title}
						variant="body2"
						href={section.url}
						className={classes.toolbarLink}
					>
						{section.title}
					</Link>
				))}
			</Toolbar>
		</>
	);
};

Header.propTypes = {
	sections: PropTypes.array,
	title: PropTypes.string,
};

export default Header;
