import { useContext } from 'react';
import endPointContext from 'stores/end-points-context';
import { useQuery, useMutation } from 'react-query';
import axios from 'axios';

export const useSuperHeroesData = (onSuccess, onError) => {
	const endPointCtx = useContext(endPointContext);

	const getData = () => axios.get(endPointCtx.superHeroes);

	return useQuery('super-heroes', getData, {
		// cacheTime: 5000, // Manipulating how long the caching of the fetch will live on the memory. Default value is 5 minutes
		// staleTime: 30000, // This is to "stale the time" for how long it will display on the site. In thi case it's 30 seconds. Good if the data doesn't change often on the site. Default value is 0 seconds
		// refetchOnMount: false, // This will refetch on mount if the data is "stale". This is the default value is true. Adding the false, the data will not refetch
		// refetchOnWindowFocus: true, // every time your window tab loses focus and gains focus again, a background refetch  is initiated. Default value is set to true
		// refetchInterval: 2000, // This will always refetch every 2 seconds. useful is we want for example get data from stock price. default is set to false
		// refetchIntervalInBackground: true, // this will continue to pull data even the browser even if the windows loose the focus. This provides a really good user experience where data changes every now and then
		// enabled: false, // Inform react query not to fire the get request when the component mounts,
		onSuccess,
		onError,
		// select: (data) => {
		// 	// select automatically recieves the api data as an argument. The "data" parameeter on callback is our "response"
		// 	const superHeroesNames = data.data.map((hero) => hero.name);
		// 	return superHeroesNames;
		// },
	});
};

export const useAddSuperHeroData = () => {
	const endPointCtx = useContext(endPointContext);

	const addSuperHero = (heroValues) => axios.post(endPointCtx.superHeroes, heroValues);

	return useMutation(addSuperHero);
};
