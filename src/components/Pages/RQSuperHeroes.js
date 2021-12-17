import useSuperHeroesData from "../../hooks/useSuperHeroesData";

const RQSuperHeroesPage = () => {
	const onSuccess = (data) => {
		console.log('Perfom side effects after data fetching', data);
	};

	const onError = (error) => {
		console.log('Perfom side effects after encountering error', error);
	};

	// Here, we don't need to manage the state variables and using the useEffect
	const {
		isLoading,
		data,
		isError,
		error,
		isFetching, // This indicates the background is refetching or not on the query
		refetch, // This will manually retrigger the query. Useful for example onClick handler
	} = useSuperHeroesData(onSuccess, onError);

	if (isLoading || isFetching) {
		return <h2>Loading...</h2>;
	}

	if (isError) {
		return <h2>{error.message}</h2>;
	}

	return (
		<>
			<h2>React Query Super Heroes Page</h2>
			<button type='button' onClick={refetch}>
				Fetch Heroes
			</button>
			{data.map((heroName) => {
				return <div key={heroName}>{heroName}</div>;
			})}
			{/* {data?.data.map((hero) => {
				return <div key={hero.name}>{hero.name}</div>;
			})} */}
		</>
	);
};

export default RQSuperHeroesPage;