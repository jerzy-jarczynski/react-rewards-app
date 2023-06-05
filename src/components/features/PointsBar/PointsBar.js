import styles from './PointsBar.module.scss';
import PointsButton from '../../common/PointsButton/PointsButton';
import PopUp from '../../features/PopUp/PopUp';
import AddPointsWidget from '../AddPointsWidget/AddPointsWidget';
import { useState, useEffect } from 'react';
import { getAllPoints } from '../../../redux/pointsRedux';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import clsx from 'clsx';

const NavBar = () => {

  const location = useLocation();
  const points = useSelector(getAllPoints);

  const [open, setOpen] = useState(false);
  const [scrollableContent] = useState(document.querySelector('body'));
  const [currentUrl, setCurrentUrl] = useState('');
  const [timeline, setTimeline] = useState(false);

  const openPopUp = () => setOpen(true);
  const closePopUp = () => setOpen(false);

  const showPopUp = o => {
    if (o) {
      return (
        <PopUp clickFunction={ closePopUp }>
          <AddPointsWidget action={ closePopUp } />
        </PopUp>
      );
    }
  };

  useEffect(() => {
    setCurrentUrl(location.pathname);
    setTimeline(currentUrl === '/react-rewards/timeline');
  }, [location.pathname, currentUrl]);

  return (
    <header className={ clsx(styles.PointsBar, timeline && styles.timeline) } >
      <h2 className={ styles.info }>Zebrane obecnie punkty</h2>
      <PointsButton location={ 'PointsBar' } amount={ points } clickFunction={ openPopUp } />
      { open ? showPopUp(open) : null }
      {
        open
        ? scrollableContent.classList.add(styles.noScroll)
        : (scrollableContent.classList.contains(styles.noScroll)
          ? scrollableContent.classList.remove(styles.noScroll)
          : null)
      }
    </header>
  );
};

export default NavBar;