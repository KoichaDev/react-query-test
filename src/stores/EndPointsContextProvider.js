import React from 'react';
import EndPointsContext from './end-points-context';

const EndPointsContextProvider = ({ children }) => {
	const endPointValues = {
		superHeroes: 'http://localhost:4000/superheroes',
		superHeroId: (heroId) => `http://localhost:4000/superheroes/${heroId}` 
	};

	return <EndPointsContext.Provider value={endPointValues}>{children}</EndPointsContext.Provider>;
};

export default EndPointsContextProvider;
