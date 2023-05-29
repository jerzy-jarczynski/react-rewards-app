import styles from './NavigationLink.module.scss';
import clsx from 'clsx';

const NavigationLink = props => {

  return (
    <div className={clsx( styles.NavigationLink, props.active && styles.active )}>
      <div className={styles.iconContainer}>
        <img
          src={props.icon}
          alt={props.name}
          className={ styles.icon }
        />
        <img
          src={props.iconActive}
          alt={props.name}
          className={ styles.iconActive } />
      </div>
      <span>
        { props.name }
      </span>
    </div>
  );

};

export default NavigationLink;