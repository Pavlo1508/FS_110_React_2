import s from './ColorPicker.module.css';
import colors from '../../assets/colors';
import { useState } from 'react';

export const ColorPicker = () => {
	const [currentColor, setCurrentColor] = useState('white');

	return (
    <section className={s.bgWrapper}>
      <div className={s.pallette}>
        <h2>
					Current color: <span style={{ color: currentColor, backgroundColor: 'black'}}>{currentColor}</span>
        </h2>
        <ul className={s.list}>
          {colors.map((item) => (
            <li
              className={s.item}
              key={item.id}
							onClick={() => setCurrentColor(item.color)}
							style={{backgroundColor: item.color}}
            >
              {item.color}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}