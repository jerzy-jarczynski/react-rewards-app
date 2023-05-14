import styles from './TextField.module.scss';

const TextField = props => {

  return (
    <input type={ props.type } placeholder={ props.placeholder } className={ styles.TextField } name={ props.name || '' } autoComplete='on' />
  );

};

export default TextField;