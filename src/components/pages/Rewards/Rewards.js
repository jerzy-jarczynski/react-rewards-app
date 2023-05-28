import PointsBar from '../../features/PointsBar/PointsBar';
import Container from '../../common/Container/Container';
import RewardsList from '../../views/RewardsList/RewardsList';

const Rewards = () => {

  return (
    <>
      <PointsBar />
      <main>
        <Container>
          <RewardsList />
        </Container>
      </main>
    </>
  );

};

export default Rewards;