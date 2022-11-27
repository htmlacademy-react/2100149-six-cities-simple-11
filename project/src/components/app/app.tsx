import { Route, BrowserRouter, Routes } from 'react-router-dom';
import ScrollToTop from '../scroll-to-top/scroll-to-top';
import LoginScreen from '../../pages/login-screen/login-screen';
import MainScreen from '../../pages/main-screen/main-screen';
import MainScreenEmpty from '../../pages/main-empty-screen/main-empty-screen';
import RoomScreen from '../../pages/room-screen/room-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import { AppRoute } from '../../const';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainScreen />}
        />
        <Route
          path={AppRoute.MainEmpty}
          element={<MainScreenEmpty />}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginScreen />}
        />
        <Route
          path={AppRoute.Room}
          element={<RoomScreen />}
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
