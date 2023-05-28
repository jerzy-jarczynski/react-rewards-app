// router
import { Routes, Route } from 'react-router-dom';
// components
import NavBar from './components/features/NavBar/NavBar';
// pages
import Rewards from './components/pages/Rewards/Rewards';
import TimeLine from './components/pages/TimeLine/TimeLine';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/react-rewards" element={<Rewards />} />
        <Route path="/react-rewards/timeline" element={<TimeLine />} />
      </Routes>
      <footer>
        <NavBar />
      </footer>
    </>
  );
}

export default App;
