// react
import { useState, useEffect } from 'react';
// redux
import { useDispatch } from 'react-redux';
import { fetchRewards } from './redux/rewardsRedux';
import { fetchPoints } from './redux/pointsRedux';
import { fetchPassword } from './redux/passwordRedux';
// router
import { Routes, Route, useLocation } from 'react-router-dom';
// components
import NavBar from './components/features/NavBar/NavBar';
import Container from './components/common/Container/Container';
import PointsBar from './components/features/PointsBar/PointsBar';
// pages
import Rewards from './components/pages/Rewards/Rewards';
import TimeLine from './components/pages/TimeLine/TimeLine';
// styles
import './styles/pageTransitions.scss';

const App = () => {

  const dispatch = useDispatch();

  const location = useLocation();

  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransistionStage] = useState("fadeIn");

  useEffect(() => {
    dispatch(fetchRewards());
    dispatch(fetchPoints());
    dispatch(fetchPassword());
    if (location !== displayLocation) setTransistionStage("fadeOut");
  }, [location, displayLocation, dispatch]);

  return (
    <>
      <PointsBar />
      <div
        className={`${transitionStage}`}
        onAnimationEnd={() => {
          if (transitionStage === "fadeOut") {
            setTransistionStage("fadeIn");
            setDisplayLocation(location);
          }
        }}
      >
        <Container>
          <Routes location={displayLocation}>
            <Route path="/react-rewards" element={<Rewards />} />
            <Route path="/react-rewards/timeline" element={<TimeLine />} />
          </Routes>
        </Container>
      </div>
      <footer>
        <NavBar />
      </footer>
    </>
  );
}

export default App;