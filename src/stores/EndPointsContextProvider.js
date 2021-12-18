import React from 'react';
import EndPointsContext from './end-points-context';

const EndPointsContextProvider = ({ children }) => {
	const endPointValues = {
		superHeroes: 'http://localhost:4000/superheroes',
		superHeroId: (heroId) => `http://localhost:4000/superheroes/${heroId}`,
		colors: (pageNumber) => `http://localhost:4000/colors?_limit=2&_page=${pageNumber}`,
	};

	return <EndPointsContext.Provider value={endPointValues}>{children}</EndPointsContext.Provider>;
};

export default EndPointsContextProvider;
