import styles from './NavBar.module.scss';
import { useSelector } from 'react-redux';
import { getAllNavlinks } from '../../../redux/navlinksRedux';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

  const navlinks = useSelector(getAllNavlinks);

  console.log(navlinks);

  return (
    <nav className={styles.NavBar}>
      <ul className={styles.navLinks}>
        {
          navlinks.map(navlink => (
            <li key={navlink.id}>
              <NavLink to={navlink.linkTo}>
                { navlink.name }
              </NavLink>
            </li>
          ))
        }
      </ul>
    </nav>
  );

};

export default NavBar;