import styles from './PopUp.module.scss';

const PopUp = props => {
  
  const handleClick = e => {
    e.preventDefault();
    if (e.target === e.currentTarget) {
      props.clickFunction();
    }
  };

  // onClick={ testClick }

  return (
    <>
      <div className={ styles.popUp } onClick={handleClick}>
      </div>
      <div className={ styles.content }>
        { props.children }
      </div>
    </>
  );

};

export default PopUp;