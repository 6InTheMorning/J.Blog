// ./lib/posts.js

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

//Finding directory named "posts" from the current working directory of Node.
const postDirectory = path.join(process.cwd(), 'posts');

export const getSortedPosts = () => {
	//Reads all the files in the post directory
	const fileNames = fs.readdirSync(postDirectory);

	const allPostsData = fileNames.map(filename => {
		const slug = filename.replace(/\.(md|mdx)$/, '');

		const fullPath = path.join(postDirectory, filename);
		//Extracts contents of the MDX file

		const fileContents = fs.readFileSync(fullPath, 'utf8');

		console.log(fileContents);
		console.log(matter(fileContents));
		const { data } = matter(fileContents);

		const options = { month: 'long', day: 'numeric', year: 'numeric' };
		const formattedDate = new Date(data.date).toLocaleDateString('en-IN', options);

		const frontmatter = {
			...data,
			date: formattedDate,
		};

		return {
			slug,
			...frontmatter,
		};
	});

	return allPostsData.sort((a, b) => {
		if (new Date(a.date) < new Date(b.date)) {
			return 1;
		} else {
			return -1;
		}
	});
};
