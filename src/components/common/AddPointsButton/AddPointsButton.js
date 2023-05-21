import styles from './AddPointsButton.module.scss';

const AddPointsButton = ({ children, action }) => {

  const handleClick = e => {
    e.preventDefault();
    action(children);
  };

  return (
    <button className={ styles.AddPointsButton } value={ children } onClick={handleClick}>
      { `+${ children }` }
    </button>
  );

}

export default AddPointsButton;