import AddPointsButton from '../../common/AddPointsButton/AddPointsButton';
import SubmitButton from '../../common/SubmitButton/SubmitButton';
import TextInput from '../../common/TextInput/TextInput';
import styles from './AddPointsWidget.module.scss';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getAllPoints, updatePoints } from '../../../redux/pointsRedux';
import { useDispatch } from 'react-redux';

const AddPointsWidget = () => {

  const currentPoints = useSelector(getAllPoints);
  const [newPoints, setNewPoints] = useState(currentPoints);
  const dispatch = useDispatch();

  const arrayRange = (start, stop, step) =>
    Array.from(
      { length: (stop - start) / step + 1 },
      (value, index) => start + index * step);

  const addPointsButtons = arrayRange(5, 25, 5);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updatePoints(newPoints));
  };

  return (
    <form className={ styles.AddPointsWidget } onSubmit={ handleSubmit }>
      <label>Dodaj punkty lub wpisz ich nową wartość</label>
      <div className={ styles.buttonRow }>
        {
          addPointsButtons.map(
            (button, index) => {
              return (
                <AddPointsButton key={ index }>
                  { button }
                </AddPointsButton>
              );
            } 
          )
        }
      </div>
      <TextInput type={ 'number' } placeholder={ currentPoints } onChange={ e => setNewPoints(e.target.value) } />
      <label>Podaj hasło do zmiany</label>
      <TextInput type={ 'password' } />
      <SubmitButton>
        { 'Zmień punkty' }
      </SubmitButton>
    </form>
  );

};

export default AddPointsWidget;