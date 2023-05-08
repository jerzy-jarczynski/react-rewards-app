import styles from './AddPointsButton.module.scss';

const AddPointsButton = ({ children }) => {

  return (
    <button className={ styles.AddPointsButton }>
      { `+${ children }` }
    </button>
  );

}

export default AddPointsButton;