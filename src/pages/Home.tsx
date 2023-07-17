import { FC } from 'react';
import { Helmet } from 'react-helmet';

import { TodoList } from '../components/TodoList';

export const Home: FC = () => {
	return (
		<>
			<Helmet>
				<title>Home page1</title>
			</Helmet>
			<h1 data-testid="page-title">Home</h1>
			<div>hello</div>
			<p>This is the list.</p>
			<TodoList />
		</>
	);
};
