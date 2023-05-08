import styles from './TextField.module.scss';

const TextField = props => {

  return (
    <input type={ props.type } placeholder={ props.placeholder } className={ styles.TextField } />
  );

};

export default TextField;