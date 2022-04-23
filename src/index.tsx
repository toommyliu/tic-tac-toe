import React from 'react';
import ReactDOM from 'react-dom/client';
import { Game } from './components/Game';
import './css/index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<Game />
	</React.StrictMode>
);
