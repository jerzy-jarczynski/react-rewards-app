import Container from './components/Container/Container';
import Rewards from './components/Rewards/Rewards';

const App = () => {
  return (
    <main>
      {/* Navbar */}
      <Container>
        <Rewards />
      </Container>
      {/* Action bar */}
    </main>
  );
}

export default App;
