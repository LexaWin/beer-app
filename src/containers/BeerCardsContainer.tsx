import { useBeers, BEERS_NUMBER } from '../queries/beers';
import { IonCard } from '@ionic/react';
import BeerCard from '../components/BeerCard';
import SkeletonCard from '../components/SkeletonCard';

import './BeerCardsContainer.css';

interface BeerCardsContainerProps {
  pageNumber: number;
}

const BeerCardsContainer: React.FC<BeerCardsContainerProps> = ({
  pageNumber,
}) => {
  const { data, isLoading } = useBeers(pageNumber);

  console.log(isLoading);

  if (!data?.length) {
    return null;
  }

  return (
    <>
      {isLoading
        ? new Array(BEERS_NUMBER).fill('').map((_, i) => (
            <IonCard key={i}>
              <SkeletonCard />
            </IonCard>
          ))
        : data.map((beer) => (
            <IonCard key={beer.id} routerLink={`/${pageNumber}/${beer.id}`}>
              <BeerCard beer={beer} />
            </IonCard>
          ))}
    </>
  );
};

export default BeerCardsContainer;
