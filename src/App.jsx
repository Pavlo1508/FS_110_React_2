import { useState } from "react";
//  ______________________________________________________________________________________________________________________________
import Button from "./components/Button/Button";
//  ______________________________________________________________________________________________________________________________
import { ColorPicker } from "./components/ColorPicker/ColorPicker";
import { Counter } from "./components/Counter/Counter";
import { TodoList } from "./components/TodoList/TodoList";
// ______________________________________________________________________________________________________________________________
import Modal from "./components/Modal/Modal";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <>
      <h2>Old Notates</h2>
      <Button />
      <h2>
        __________________________________________________________________________________________________________________________
      </h2>
      <h2>New Notates</h2>
      <Counter />
      <h2>
        --------------------------------------------------------------------------------------------------------------------------
      </h2>
      <ColorPicker />
      <h2>
        --------------------------------------------------------------------------------------------------------------------------
      </h2>
      <TodoList />
      <h2>
        --------------------------------------------------------------------------------------------------------------------------
			</h2>
			<div>
				<input />
        <button onClick={openModal}>Open modal</button>
        {isOpen && (
          <Modal onClose={closeModal}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam est
            ipsa accusamus amet voluptatem obcaecati natus laboriosam doloribus
            eum ullam nihil nisi quisquam atque quidem cum blanditiis dicta
            illum ut magnam officia, voluptatibus sit? Excepturi cupiditate
            illum eum necessitatibus similique exercitationem vitae deserunt
            velit. Illum fuga quos adipisci explicabo doloribus.
          </Modal>
        )}
      </div>
    </>
  );
};

export default App;
