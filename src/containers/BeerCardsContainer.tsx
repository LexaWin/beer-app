import { useBeers } from '../queries/beers';
import { IonCard } from '@ionic/react';
import BeerCard from '../components/BeerCard';

import './BeerCardsContainer.css';

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

  return (
    <>
      {data.map((beer) => (
        <IonCard key={beer.id} routerLink={`/${pageNumber}/${beer.id}`}>
          <BeerCard beer={beer} />
        </IonCard>
      ))}
    </>
  );
};

export default BeerCardsContainer;
