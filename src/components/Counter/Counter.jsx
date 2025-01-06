import { useState } from 'react';
import s from './Counter.module.css';

export const Counter = () => {

	const [counter, setCounter] = useState(0);
	const [step, setStep] = useState(1);

	const handleClickPlus = () => {
		// setCounter(counter + 1)

		setCounter((prevState => prevState + step))
		// setCounter((prevState => prevState + 1))
		// setCounter((prevState => prevState + 5))
	}
	const handleClickMinus = () => {
		// setCounter(counter - 1);

		setCounter((p => p - step));
	}
	const handleReset = () => {
		setCounter(0);
		setStep(1);
	}
	return (
    <div className={s.flexContainer}>
      <div className={s.wrapper}>
				<h1>{counter}</h1>
				<input type='number' value={step} onChange={(e) => setStep(+e.target.value)}/>
        <div className={s.flex}>
          <button onClick={handleClickMinus} className={s.btn}>
            minus
          </button>
          <button onClick={handleReset} className={s.btn}>
            reset
          </button>
          <button onClick={handleClickPlus} className={s.btn}>
            plus
          </button>
        </div>
      </div>
    </div>
  );
};