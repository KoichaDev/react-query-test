import { useContext } from 'react';
import endPointContext from 'stores/end-points-context';
import axios from 'axios';

const FetchSuperHeroes = () => {
	const endPointCtx = useContext(endPointContext);

	const getData = () => axios.get(endPointCtx.superHeroes);
	const getDataById = () => axios.get(endPointCtx.superHeroId)

	return { getData, getDataById };
};

export default FetchSuperHeroes;
