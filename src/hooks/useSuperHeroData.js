import { useQuery, useQueryClient } from 'react-query';
import fetchSuperHeroes from '../services/fetch-super-heroes';

const useSuperHeroData = (heroId) => {
	const { getDataById } = fetchSuperHeroes();

	const queryClient = useQueryClient();

	return useQuery(['super-hero', heroId], () => getDataById(heroId), {
		initialData: () => {
			// Getting the data from the "super heroes"
			const hero = queryClient
				.getQueryData('super-heroes')
				?.data?.find((hero) => hero.id === parseInt(heroId));

			if (hero) {
				return { 
					data: hero 
				};
			} else  {
				// By returning it, will save us from runtime error, otherwise we will be trying to access the "data.data.name" when it doesn't exist yet
				return undefined;
			}
		},
	});
};

export default useSuperHeroData;
