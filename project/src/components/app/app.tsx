import { Route, BrowserRouter, Routes} from 'react-router-dom';
import { AppRoute } from '../../const';
import { useState } from 'react';
import LoginScreen from '../../pages/login-screen/login-screen';
import MainScreen from '../../pages/main-screen/main-screen';
import RoomScreen from '../../pages/room-screen/room-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import { Offers } from '../../types/offer';

type AppProps = {
  offers: Offers;
}

function App({ offers }: AppProps): JSX.Element {
  const [activeCard, setActiveCard] = useState('');

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainScreen offers={offers} activeCard={activeCard} onSelectCard={setActiveCard} />}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginScreen />}
        />
        <Route
          path={AppRoute.Room}
          element={<RoomScreen offers={offers} activeCard={activeCard} onSelectCard={setActiveCard} />}
        />
        <Route
          path={AppRoute.NotFound}
          element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
