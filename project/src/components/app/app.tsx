import MainScreen from '../../pages/main-screen/main-screen';

type AppProps = {
  roomCardsCount: number;
}

function App({roomCardsCount}: AppProps): JSX.Element {
  return <MainScreen roomCardsCount={roomCardsCount}/>;
}

export default App;
