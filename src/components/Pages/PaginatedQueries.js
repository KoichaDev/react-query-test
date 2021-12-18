import { useState } from 'react';
import useColors from 'hooks/useColors';

const PaginatedQueriesPage = () => {
	const [pageNumber, setPageNumber] = useState(1);
	const { data, isLoading, isError, error } = useColors(pageNumber);

	if (isLoading) return <h2>Loading Colors...</h2>;

	if (isError) return <h2>{error.message}</h2>;

	return (
		<>
			{data?.data.map((color) => {
				return (
					<div key={color.id}>
						<h2>
							{color.id} - {color.label}
						</h2>
					</div>
				);
			})}

			<div>
				<button
					onClick={() => setPageNumber((prevPage) => prevPage - 1)}
					disabled={pageNumber === 1}>
					Prev Page
				</button>
				<button
					onClick={() => setPageNumber((nextPage) => nextPage + 1)}
					disabled={pageNumber === 4}>
					Prev Page
				</button>
			</div>
		</>
	);
};

export default PaginatedQueriesPage;
