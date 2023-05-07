import styles from './NavBar.module.scss';
import PointsButton from '../PointsButton/PointsButton';

const NavBar = () => {
  return (
    <nav className={ styles.NavBar }>
      <h2 className={ styles.info }>Zebrane obecnie punkty</h2>
      <PointsButton location={ 'NavBar' } amount={ 'XX' } />
    </nav>
  );
};

export default NavBar;