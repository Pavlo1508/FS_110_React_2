import Button from "./components/Button/Button";
//  ______________________________________________________________________________________________________________________________
import { ColorPicker } from "./components/ColorPicker/ColorPicker";
import { Counter } from "./components/Counter/Counter";
import { TodoList } from "./components/TodoList/TodoList";

const App = () => {
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
    </>
  );
};

export default App;
