import { useQuery } from 'react-query';
import fetchSuperHeroes from '../services/fetch-super-heroes';
import axios from 'axios';

// const fetchSuperHero = (heroId) => {
// 	return axios.get(`http://localhost:4000/superheroes/${heroId}`)
// }

// * alternative way to get the "hero key". 
const fetchSuperHero = ({queryKey}) => {
	const heroId = queryKey[1];
	return axios.get(`http://localhost:4000/superheroes/${heroId}`)
}

const useSuperHeroData = (heroId) => {
	// const { getDataById } = fetchSuperHeroes();

	return useQuery(['super-hero', heroId], fetchSuperHero);
};

export default useSuperHeroData;
