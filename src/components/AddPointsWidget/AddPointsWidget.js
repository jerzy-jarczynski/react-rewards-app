import AddPointsButton from '../AddPointsButton/AddPointsButton';
import SubmitButton from '../SubmitButton/SubmitButton';
import TextField from '../TextField/TextField';

import styles from './AddPointsWidget.module.scss';

const AddPointsWidget = () => {

  const arrayRange = (start, stop, step) =>
    Array.from(
      { length: (stop - start) / step + 1 },
      (value, index) => start + index * step);

  const addPointsButtons = arrayRange(5, 25, 5);

  return (
    <form className={ styles.AddPointsWidget }>
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
      <TextField type={ 'number' } placeholder={ '1524' } />
      <label>Podaj hasło do zmiany</label>
      <TextField type={ 'password' } />
      <SubmitButton>
        { 'Zmień punkty' }
      </SubmitButton>
    </form>
  );

};

export default AddPointsWidget;