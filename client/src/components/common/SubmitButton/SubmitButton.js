import styles from './SubmitButton.module.scss';

const SubmitButton = ({ children }) => {

  return (
    <button type="submit" className={ styles.SubmitButton }>
      { children }
    </button>
  );

};

export default SubmitButton;