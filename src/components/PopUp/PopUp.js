import styles from './PopUp.module.scss';
import { useEffect } from 'react';

const PopUp = props => {

  const testClick = (event) => {
    event.preventDefault();
    if (event.target === event.currentTarget) {
      props.clickFunction();
    }
  };

  return (
    <div className={ styles.popUp } onClick={ testClick } >
      <div className={ styles.content }>
        <h3>DUPA</h3>
        <button onClick={ props.clickFunction }>
          X
        </button>
      </div>
    </div>
  );

};

export default PopUp;