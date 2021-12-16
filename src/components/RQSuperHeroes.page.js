import { useQuery } from 'react-query';
import fetchSuperHeroes from './services/fetch-super-heroes';

export const RQSuperHeroesPage = () => {
	const { getData } = fetchSuperHeroes();

	// Here, we don't need to manage the state variables and using the useEffect
	const { isLoading, data } = useQuery('super-heroes', getData);

	if (isLoading) {
		return <h2>Loading...</h2>;
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
