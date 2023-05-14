import styles from './TextInput.module.scss';

const TextInput = props => {

  return (
    <input type={ props.type } placeholder={ props.placeholder } className={ styles.TextInput } autoComplete='on' onChange={ props.onChange } />
  );

};

export default TextInput;