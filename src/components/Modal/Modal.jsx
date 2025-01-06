import { useEffect } from 'react';
import s from './Modal.module.css';

const Modal = ({ children, title = 'Default modal', onClose }) => {
	useEffect(() => {

		const handelKeyDown = (e) => {
			console.log(e.key);
			if (e.key === 'Escape') {
				onClose()
			}
		}
		document.addEventListener('keydown', handelKeyDown);

		console.log('Modal is open');
		const intervalId = setInterval(() => {
			console.log(new Date().toLocaleTimeString());
		}, 1000);
		const timeoutId = setTimeout(() => {
			console.log('1234123412341');
		}, 2000);

		return () => {
			console.log('Buy Buy :)');
			clearInterval(intervalId);
			clearTimeout(timeoutId);
			document.removeEventListener('keydown', handelKeyDown);
		};
	}, [onClose]);

	const handleBackdropClick = (e) => {
		console.log(e.target);
		console.log(e.currentTarget);
		if (e.target === e.currentTarget) {
			onClose();
		};
	}
	return (
    <div className={s.wrapper} onClick={handleBackdropClick}>
      <div className={s.content}>
        <h1>{title}</h1>
        <hr />
        <button onClick={onClose} className={s.closeBtn}>
          x
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;