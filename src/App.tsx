import Card from './components/Card';
import { useFetchRepositories } from './hooks/useRepos';
import { useFavoriteReposStore } from './store/favoriteRepos';

const App = () => {
  const { data, isLoading, isError } = useFetchRepositories();
  const { favoriteReposIds } = useFavoriteReposStore();

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
        <Card
          key={repository.id}
          repository={repository}
          isFavorite={favoriteReposIds.includes(repository.id)}
        />
      ))}
    </div>
  );
};
export default App;
