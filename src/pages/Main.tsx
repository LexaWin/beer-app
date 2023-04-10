import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import './Main.css';
import PaginateBeers from '../components/PaginateBeers';
import { starOutline } from 'ionicons/icons';
import Modal from '../components/Modal';
import { useState } from 'react';

const Main: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Beers</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => setModalOpen(true)}>
              <IonIcon icon={starOutline} slot="start" />
              Favorites
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <PaginateBeers />
        <Modal isOpen={isModalOpen} setOpen={setModalOpen} />
      </IonContent>
    </IonPage>
  );
};

export default Main;
