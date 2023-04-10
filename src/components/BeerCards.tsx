import { IonCard } from '@ionic/react';
import BeerCardContainer from '../containers/BeerCardContainer';
import './BeerCards.css';

interface BeerCardsProps {
  beerIds: number[];
}

const BeerCards: React.FC<BeerCardsProps> = ({ beerIds }) => {
  return (
    <>
      {beerIds.map((beerId) => (
        <IonCard key={beerId} routerLink={`/beer/${beerId}`}>
          <BeerCardContainer beerId={beerId} />
        </IonCard>
      ))}
    </>
  );
};

export default BeerCards;
