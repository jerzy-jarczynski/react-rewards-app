import NavBar from './components/features/NavBar/NavBar';
import Container from './components/common/Container/Container';
import Rewards from './components/views/Rewards/Rewards';

const App = () => {
  return (
    <main>
      <NavBar />
      <Container>
        <Rewards />
      </Container>
      {/* Action bar */}
    </main>
  );
}

export default App;
