import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/Pages/Home';
import DependentQueriesPage from './components/Pages/DependentQueries'
import DynamicParallellPage from './components/Pages/DynamicParallell.js';
import ParallelQueriesPage from './components/Pages/ParallelQueries';
import SuperHeroesPage from './components/Pages/SuperHeroes';
import RQSuperHeroePage from './components/Pages/RQSuperHero';
import RQSuperHeroesPage from './components/Pages/RQSuperHeroes';
import PaginatedQueriesPage from './components/Pages/PaginatedQueries'
import Navbar from './components/Parts/Navbar';

function App() {
	return (
		<>
			<Navbar />
			<Switch>
				<Route path='/rq-paginated' exact>
					<PaginatedQueriesPage />
				</Route>
				<Route path='/rq-dependent'>
					<DependentQueriesPage email='example@example.com' />
				</Route>
				<Route path='/rq-dynamic-parallel' exact>
					<DynamicParallellPage heroIds={[1, 3]} />
				</Route>
				<Route path='/rq-parallel' exact>
					<ParallelQueriesPage />
				</Route>
				<Route path='/rq-super-heroes/:heroId' exact>
					<RQSuperHeroePage />
				</Route>
				<Route path='/super-heroes'>
					<SuperHeroesPage />
				</Route>
				<Route path='/rq-super-heroes'>
					<RQSuperHeroesPage />
				</Route>
				<Route path='/'>
					<HomePage />
				</Route>
			</Switch>
		</>
	);
}

export default App;
