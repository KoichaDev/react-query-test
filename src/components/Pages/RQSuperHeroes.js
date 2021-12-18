import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAddSuperHeroData, useSuperHeroesData } from '../../hooks/useSuperHeroesData';

const RQSuperHeroesPage = () => {
	const [name, setName] = useState('');
	const [alterEgo, setAlterEgo] = useState('');

	const onSuccess = (data) => {
		console.log('Perfom side effects after data fetching', data);
	};

	const onError = (error) => {
		console.log('Perfom side effects after encountering error', error);
	};

	// Here, we don't need to manage the state variables and using the useEffect. React Query will handle it for us
	const {
		isLoading,
		data,
		isError,
		error,
		isFetching, // This indicates the background is refetching or not on the query
		refetch, // This will manually retrigger the query. Useful for example onClick handler
	} = useSuperHeroesData(onSuccess, onError);

	const {
		mutate: sendPostRequest,
		isLoading: isLoadingPostRequest,
		isError: isErrorPostRequest,
		isSuccess: isFinishedPostRequest,
	} = useAddSuperHeroData();

	if (isLoading || isFetching) return <h2>Loading...</h2>;

	if (isError) return <h2>{error.message}</h2>;

	if (isLoadingPostRequest) return <h2>Sending Request...</h2>;

	const addHerohandler = () => {
		const hero = { name, alterEgo };
		sendPostRequest(hero);
		console.log({ name, alterEgo });
	};

	return (
		<>
			<h2>React Query Super Heroes Page</h2>

			{isErrorPostRequest && <h2>Something went wrong...</h2>}

			{isFinishedPostRequest && <h2>Finished Sending Request</h2>}

			<form onSubmit={(e) => e.preventDefault()}>
				<input type='text' value={name} onChange={(e) => setName(e.target.value)} />
				<input type='text' value={alterEgo} onChange={(e) => setAlterEgo(e.target.value)} />
				<button type='submit' onClick={addHerohandler}>
					Submit
				</button>
			</form>
			<button type='button' onClick={refetch}>
				Fetch Heroes
			</button>

			{/* {data.map((heroName) => {
				return <div key={heroName}>{heroName}</div>;
			})} */}
			{data?.data.map((hero) => {
				return (
					<ul key={hero.id}>
						<li>
							<Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
						</li>
					</ul>
				);
			})}
		</>
	);
};

export default RQSuperHeroesPage;
