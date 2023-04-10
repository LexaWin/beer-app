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
import { useHistory } from 'react-router';
import { useCallback } from 'react';
import { chevronBack } from 'ionicons/icons';
import BeerInfoContainer from '../containers/BeerInfoContainer';
import './BeerInfo.css';

const BeerInfo: React.FC = () => {
  const history = useHistory();

  const goBack = useCallback(() => history.goBack(), []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton onClick={goBack} color="dark">
              <IonIcon icon={chevronBack}></IonIcon>
            </IonButton>
          </IonButtons>
          <IonTitle>Beer Info</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <BeerInfoContainer />
      </IonContent>
    </IonPage>
  );
};

export default BeerInfo;
