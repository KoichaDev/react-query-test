import { useContext } from 'react';
import endPointContext from 'stores/end-points-context';
import axios from 'axios';

const FetchSuperHeroes = () => {
	const endPointCtx = useContext(endPointContext);
	const url = endPointCtx.superHeroes;

	const getData = () => axios.get(url);

	return { getData };
};

export default FetchSuperHeroes;
