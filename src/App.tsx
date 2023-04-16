import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Main from './pages/Main';
import BeerInfo from './pages/BeerInfo';
import {
  PreferencesPlugin,
  Preferences as storage,
} from '@capacitor/preferences';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { createContext } from 'react';

export const StorageCtx = createContext<PreferencesPlugin | null>(null);
const queryClient = new QueryClient();

setupIonicReact();

const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <IonApp>
      <StorageCtx.Provider value={storage}>
        <IonReactRouter>
          <IonRouterOutlet>
            <Route exact path="/">
              <Main />
            </Route>
            <Route exact path="/:pageNumber/:beerId">
              <BeerInfo />
            </Route>
          </IonRouterOutlet>
        </IonReactRouter>
      </StorageCtx.Provider>
    </IonApp>
  </QueryClientProvider>
);

export default App;
