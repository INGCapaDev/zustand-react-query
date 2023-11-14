import Card from './components/Card';
import { useFetchRepositories } from './hooks/useRepos';

const App = () => {
  const { data, isLoading, isError } = useFetchRepositories();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error!</div>;
  }

  return (
    <div>
      <h1>Repositories</h1>
      {data?.map((repository) => (
        <Card key={repository.id} repository={repository} />
      ))}
    </div>
  );
};
export default App;
