import { Repository } from '../hooks/types';
import { useFavoriteReposStore } from '../store/favoriteRepos';

type CardProps = {
  repository: Repository;
  isFavorite: boolean;
};

const Card: React.FC<CardProps> = ({ repository, isFavorite }) => {
  const { addFavoriteRepo, removeFavoriteRepo } = useFavoriteReposStore();

  const handleLike = () => {
    if (!isFavorite) {
      return addFavoriteRepo(repository.id);
    }
    return removeFavoriteRepo(repository.id);
  };

  return (
    <div>
      <h1>{repository.name}</h1>
      <button onClick={handleLike}>{isFavorite ? 'Dislike' : 'Like'}</button>
    </div>
  );
};
export default Card;
