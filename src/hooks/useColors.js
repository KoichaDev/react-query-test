import { useContext } from 'react';
import { useQuery } from 'react-query';
import envContext from '../stores/end-points-context';
import axios from 'axios';

const useColors = (pageNumber) => {
	const envCtx = useContext(envContext);
	const fetchColors = () => axios.get(envCtx.colors(pageNumber));

	return useQuery(['colors', pageNumber], () => fetchColors(pageNumber));
};

export default useColors;
