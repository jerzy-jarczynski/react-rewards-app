import PointsBar from './components/features/PointsBar/PointsBar';
import Container from './components/common/Container/Container';
import Rewards from './components/views/Rewards/Rewards';
import NavBar from './components/features/NavBar/NavBar';

const App = () => {
  return (
    <main>
      <PointsBar />
      <Container>
        <Rewards />
      </Container>
      <NavBar />
    </main>
  );
}

export default App;
