import { IonModal, IonList, IonItem, IonIcon, IonLabel } from '@ionic/react';
import { beer } from 'ionicons/icons';
import './Modal.css';
import { useFavorites } from '../hooks/useFavorites';

interface ModalProps {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<ModalProps> = ({ isOpen, setOpen }) => {
  const { favoritesList } = useFavorites(isOpen);

  return (
    <IonModal
      id="example-modal"
      isOpen={isOpen}
      onDidDismiss={() => setOpen(false)}
    >
      <h1>Favorite Beers</h1>
      <div className="wrapper">
        {favoritesList.length === 0 ? (
          <p>List is empty</p>
        ) : (
          <IonList lines="none">
            {favoritesList.map((item) => (
              <IonItem key={item}>
                <IonIcon icon={beer}></IonIcon>
                <IonLabel>{item}</IonLabel>
              </IonItem>
            ))}
          </IonList>
        )}
      </div>
    </IonModal>
  );
};

export default Modal;
