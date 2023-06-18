import AddPointsButton from '../../common/AddPointsButton/AddPointsButton';
import SubmitButton from '../../common/SubmitButton/SubmitButton';
import TextInput from '../../common/TextInput/TextInput';
import styles from './AddPointsWidget.module.scss';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getAllPoints, updatePoints } from '../../../redux/pointsRedux';
import { getPassword } from '../../../redux/passwordRedux';
import { useDispatch } from 'react-redux';

const AddPointsWidget = ({ action }) => {

  const currentPoints = useSelector(getAllPoints);
  const currentPassword = useSelector(getPassword);

  const [newPoints, setNewPoints] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorPoints, setErrorPoints] = useState(false);

  const dispatch = useDispatch();

  const arrayRange = (start, stop, step) =>
    Array.from(
      { length: (stop - start) / step + 1 },
      (value, index) => start + index * step);

  const addPointsButtons = arrayRange(5, 25, 5);

  const handleSubmit = e => {
    e.preventDefault();

    if (newPoints) {
      if (inputPassword === currentPassword) {
        dispatch(updatePoints(newPoints));
        setInputPassword('');
        setNewPoints('');
        setErrorPassword(false);
        setErrorPoints(false);
        action();
      } else {
        setErrorPassword(true);
      }
    } else {
      setErrorPoints(true);
    }
  };

  const handleAddButtonClick = (points) => {
    const newValue = parseInt(currentPoints) + points;
    setNewPoints(newValue);
  }

  return (
    <form className={ styles.AddPointsWidget } onSubmit={ handleSubmit }>
      <label>Dodaj punkty lub wpisz ich nową wartość</label>
      <div className={ styles.buttonRow }>
        {
          addPointsButtons.map(
            (button, index) => {
              return (
                <AddPointsButton key={ index } action={handleAddButtonClick}>
                  { button }
                </AddPointsButton>
              );
            } 
          )
        }
      </div>
      <TextInput type={ 'number' } placeholder={ currentPoints } value={ newPoints } onChange={ e => setNewPoints(e.target.value) } />
      { errorPoints && <span className={styles.error}>Nowa ilość punktów nie może być pusta</span> }
      <label>Podaj hasło do zmiany</label>
      <TextInput type={ 'text' } value={ inputPassword } onChange={ e => setInputPassword(e.target.value) } password={true} />
      { errorPassword && <span className={styles.error}>Wprowadź poprawne hasło</span> }
      <SubmitButton>
        { 'Zmień punkty' }
      </SubmitButton>
    </form>
  );

};

export default AddPointsWidget;