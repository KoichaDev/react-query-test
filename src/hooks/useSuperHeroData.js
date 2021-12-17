import { useQuery } from 'react-query';
import fetchSuperHeroes from '../services/fetch-super-heroes';

const useSuperHeroData = (heroId) => {
	const { getDataById  } = fetchSuperHeroes();

	return useQuery(['super-hero', heroId], () => getDataById(heroId));
};

export default useSuperHeroData;
