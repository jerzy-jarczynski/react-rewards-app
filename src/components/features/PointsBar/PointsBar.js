import styles from './PointsBar.module.scss';
import PointsButton from '../../common/PointsButton/PointsButton';
import PopUp from '../../features/PopUp/PopUp';
import AddPointsWidget from '../AddPointsWidget/AddPointsWidget';
import { useState } from 'react';
import { getAllPoints } from '../../../redux/pointsRedux';
import { useSelector } from 'react-redux';

const NavBar = () => {

  const points = useSelector(getAllPoints);

  const [open, setOpen] = useState(false);
  const [scrollableContent] = useState(document.querySelector('body'));

  const openPopUp = () => setOpen(true);
  const closePopUp = () => setOpen(false);

  const showPopUp = o => {
    if (o) {
      return (
        <PopUp clickFunction={ closePopUp }>
          <AddPointsWidget />
        </PopUp>
      );
    }
  };

  return (
    <header className={ styles.PointsBar } >
      <h2 className={ styles.info }>Zebrane obecnie punkty</h2>
      <PointsButton location={ 'PointsBar' } amount={ points } clickFunction={ openPopUp } />
      { open ? showPopUp(open) : null }
      { open ? scrollableContent.classList.add(styles.noScroll) : scrollableContent.classList.remove(styles.noScroll) }
    </header>
  );
};

export default NavBar;