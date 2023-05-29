import styles from './NavBar.module.scss';
import { useSelector } from 'react-redux';
import { getAllNavlinks } from '../../../redux/navlinksRedux';
import { NavLink, useLocation } from 'react-router-dom';
import NavigationLink from '../../common/NavigationLink/NavigationLink';

const NavBar = () => {

  const navlinks = useSelector(getAllNavlinks);

  const activePage = useLocation();

  return (
    <nav className={styles.NavBar}>
      <ul className={styles.navLinks}>
        {
          navlinks.map(navlink => (
            <li key={navlink.id} className={ activePage.pathname === navlink.linkTo ? styles.active : undefined }>
              <NavLink to={navlink.linkTo}>
                <NavigationLink
                  {...navlink}
                  active={ activePage.pathname === navlink.linkTo ? true : undefined }
                />
              </NavLink>
            </li>
          ))
        }
        <li className={styles.slide}></li>
      </ul>
    </nav>
  );

};

export default NavBar;