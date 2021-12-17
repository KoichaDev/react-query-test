import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/Pages/Home';
import SuperHeroesPage from './components/Pages/SuperHeroes';
import RQSuperHeroesPage from './components/Pages/RQSuperHeroes';
import Navbar from './components/Parts/Navbar';

function App() {
	return (
		<>
			<Navbar />
			<Switch>
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
