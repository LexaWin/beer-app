import { useParams } from 'react-router';
import { useBeers } from '../queries/beers';
import BeerInfoContent from '../components/BeerInfoContent';
import './BeerInfoContainer.css';

const BeerInfoContainer: React.FC = () => {
  const { pageNumber, beerId } = useParams<{
    pageNumber?: string;
    beerId?: string;
  }>();

  if (!pageNumber || !beerId) {
    return null;
  }

  const { data } = useBeers(+pageNumber);

  if (!data) {
    return null;
  }

  const index = data.findIndex((beer) => beer.id === +beerId);

  return <BeerInfoContent data={data[index]} />;
};

export default BeerInfoContainer;
