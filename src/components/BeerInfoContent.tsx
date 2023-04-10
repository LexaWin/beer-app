import { IonButton, IonIcon } from '@ionic/react';
import { BeerModel } from '../declarations/models/beer.model';
import './BeerInfoContent.css';
import { useFavorite } from '../hooks/useFavorite';
import { star, starOutline } from 'ionicons/icons';

interface BeerInfoContentProps {
  data: BeerModel;
}

const BeerInfoContent: React.FC<BeerInfoContentProps> = ({ data }) => {
  const { id, name, image_url, abv, description } = data;

  const { isFavorite, buttonState, handleClick } = useFavorite(id, name);

  return (
    <div className="beer-info">
      <h1 className="beer-info__title">{name}</h1>
      <IonButton
        size="small"
        color={isFavorite ? 'success' : 'warning'}
        disabled={buttonState === 'disabled'}
        onClick={handleClick}
      >
        <IonIcon icon={isFavorite ? star : starOutline} slot="start"></IonIcon>
        {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      </IonButton>
      <img className="beer-info__image" src={image_url} alt={name} />
      <p>Alcohole: {abv}%</p>
      <p>{description}</p>
    </div>
  );
};

export default BeerInfoContent;
