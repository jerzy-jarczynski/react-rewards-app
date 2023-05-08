import styles from './NavBar.module.scss';
import PointsButton from '../PointsButton/PointsButton';
import PopUp from '../PopUp/PopUp';
import AddPointsWidget from '../AddPointsWidget/AddPointsWidget';
import { useState } from 'react';

const NavBar = () => {

  const [open, setOpen] = useState(false);

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
    <nav className={ styles.NavBar }>
      <h2 className={ styles.info }>Zebrane obecnie punkty</h2>
      <PointsButton location={ 'NavBar' } amount={ 'XX' } clickFunction={ openPopUp } />
      { open ? showPopUp(open) : null }
    </nav>
  );
};

export default NavBar;