import styles from './Container.module.scss';
import { useLocation } from 'react-router-dom';
import clsx from 'clsx';
import { useState, useEffect } from 'react';

const Container = ({ children }) => {

  const location = useLocation();

  const [currentUrl, setCurrentUrl] = useState('');
  const [timeline, setTimeline] = useState(false);

  useEffect(() => {
    setCurrentUrl(location.pathname);
    setTimeline(currentUrl === '/react-rewards/timeline');
  }, [location.pathname, currentUrl]);

  return (
    <div className={ clsx(styles.container, timeline && styles.timeline, 'page') }>
      { children }
    </div>
  );
};

export default Container;