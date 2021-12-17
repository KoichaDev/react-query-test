import React from 'react'

const endPointsContext = React.createContext({
    superHeroes: 'http://localhost:4000/superheroes',
});

export default endPointsContext;