import { useState, useEffect } from 'react';

// create your App component here

const App = () => {
	const url = 'https://dog.ceo/api/breeds/image/random';
	const [dog, setDog] = useState('');
	useEffect(() => {
		fetch(url)
			.then((r) => r.json())
			.then((data) => {
				setDog(data.message);
				console.log(data.message);
			});
	}, []);

	const renderDog = () => {
		return <img src={dog} alt="A Random Dog" />;
	};

	return <>{dog.length < 2 ? <p>Loading...</p> : renderDog()}</>;
};

export default App;
