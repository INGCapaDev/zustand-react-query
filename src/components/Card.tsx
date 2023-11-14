import { Repository } from '../hooks/types';

type CardProps = {
  repository: Repository;
};

const Card: React.FC<CardProps> = ({ repository }) => {
  return (
    <div>
      <h1>{repository.name}</h1>
      <button>Like</button>
    </div>
  );
};
export default Card;
