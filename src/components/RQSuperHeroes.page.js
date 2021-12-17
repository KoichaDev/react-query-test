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
		// cacheTime: 5000, // Manipulating how long the caching of the fetch will live on the memory. Default value is 5 minutes
		// staleTime: 30000, // This is to "stale the time" for how long it will display on the site. In thi case it's 30 seconds. Good if the data doesn't change often on the site. Default value is 0 seconds
		// refetchOnMount: false, // This will refetch on mount if the data is "stale". This is the default value is true. Adding the false, the data will not refetch
		// refetchOnWindowFocus: true, // every time your window tab loses focus and gains focus again, a background refetch  is initiated. Default value is set to true
		refetchInterval: 2000, // This will always refetch every 2 seconds. useful is we want for example get data from stock price. default is set to false
		refetchIntervalInBackground: true, // this will continue to pull data even the browser even if the windows loose the focus. This provides a really good user experience where data changes every now and then
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
