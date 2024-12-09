import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { Header } from '@components/Header/Header';
import { Footer } from '@components/Footer/Footer';
import './App.css';
import { QueryInstance } from './api/QueryInstance';
import { Character } from './types';

interface CharactersDataInterface {
	results: Character[];
}

function App() {
	const [count, setCount] = useState(0);
	const { data, isLoading, error } = QueryInstance<CharactersDataInterface>({
		url: '/character',
	});
	console.log(data?.results, isLoading, error);

	return (
		<>
			<Header />
			<div>
				<a href='https://vite.dev' target='_blank' rel='noreferrer'>
					<img src={viteLogo} className='logo' alt='Vite logo' />
				</a>
				<a href='https://react.dev' target='_blank' rel='noreferrer'>
					<img src={reactLogo} className='logo react' alt='React logo' />
				</a>
			</div>
			<h1>Vite + React</h1>
			{isLoading ? (
				<p>Loading...</p>
			) : (
				<ul>
					{data?.results.map(character => (
						<div key={character.id}>{character.name}</div>
					))}
				</ul>
			)}
			<div className='card'>
				<button onClick={() => setCount(count => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className='read-the-docs'>
				Click on the Vite and React logos to learn more
			</p>
			<Footer />
		</>
	);
}

export default App;
