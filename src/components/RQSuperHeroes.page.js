import { useQuery } from 'react-query';
import fetchSuperHeroes from './services/fetch-super-heroes';

export const RQSuperHeroesPage = () => {
	const { getData } = fetchSuperHeroes();
	// Here, we don't need to manage the state variables and using the useEffect
	const { 
		isLoading, 
		data, 
		isError, 
		error, 
		isFetching // This indicates the background is refetching or not on the query
	 } = useQuery('super-heroes', getData, {
		cacheTime: 5000, // Manipulating how long the caching of the fetch will live on the memory
	});

	console.log({isLoading, isFetching});

	if (isLoading) {
		return <h2>Loading...</h2>;
	}

	if(isError) {
		return <h2>{error.message}</h2>
	}

	return (
		<>
			<h2>React Query Super Heroes Page</h2>

			{data?.data.map((hero) => {
				return <div key={hero.name}>{hero.name}</div>;
			})}
		</>
	);
};
