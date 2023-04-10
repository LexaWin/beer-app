import { useBeers } from '../queries/beers';
import './BeerCardsContainer.css';
import BeerCards from '../components/BeerCards';

interface BeerCardsContainerProps {
  pageNumber: number;
}

const BeerCardsContainer: React.FC<BeerCardsContainerProps> = ({
  pageNumber,
}) => {
  const { data } = useBeers(pageNumber);

  if (!data?.length) {
    return null;
  }

  const beerIds = data.map((beer) => beer.id);

  return <BeerCards beerIds={beerIds} />;
};

export default BeerCardsContainer;
