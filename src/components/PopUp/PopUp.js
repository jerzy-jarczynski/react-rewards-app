import styles from './PopUp.module.scss';

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
        { props.children }
      </div>
    </div>
  );

};

export default PopUp;