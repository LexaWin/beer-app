import { useBeer } from '../queries/beer';
import './BeerCardContainer.css';
import BeerCard from '../components/BeerCard';

interface BeerCardContainerProps {
  beerId: number;
}

const BeerCardContainer: React.FC<BeerCardContainerProps> = ({ beerId }) => {
  const { data } = useBeer(beerId);

  if (!data) {
    return null;
  }

  return <BeerCard beer={data[0]} />;
};

export default BeerCardContainer;
