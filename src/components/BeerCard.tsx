import { BeerModel } from '../declarations/models/beer.model';
import './BeerCard.css';

interface BeerCardProps {
  beer: BeerModel;
}

const BeerCard: React.FC<BeerCardProps> = ({ beer }) => {
  const { name, abv, image_url } = beer;

  return (
    <div className="card">
      <h3 className="card__title">{name}</h3>
      <img className="card__image" src={image_url} alt={name} />
      <p>Alcohole: {abv}%</p>
    </div>
  );
};

export default BeerCard;
