import styles from './TextInput.module.scss';
import clsx from 'clsx';

const TextInput = props => {

  console.log(props.password);

  return (
    <input
      className={clsx(styles.TextInput, props.password && styles.password)}
      type={ props.type }
      placeholder={ props.placeholder }
      autoComplete='on'
      onChange={ props.onChange }
      value={ props.value }
    />
  );

};

export default TextInput;