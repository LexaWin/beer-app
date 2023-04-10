import { useParams } from 'react-router';
import { useBeer } from '../queries/beer';
import './BeerInfoContainer.css';
import BeerInfoContent from '../components/BeerInfoContent';

const BeerInfoContainer: React.FC = () => {
  const { beerId } = useParams<{ beerId?: string }>();

  if (!beerId) {
    return null;
  }

  const { data } = useBeer(+beerId);

  if (!data) {
    return null;
  }

  return <BeerInfoContent data={data[0]} />;
};

export default BeerInfoContainer;
