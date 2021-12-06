import "./App.css";
import Counter from "./components/Counter";
import Fetching from "./components/Fetching.js";
import Himanshu from "./components/Himanshu";
import SignupForm from "./components/SignupForm";
import Validation from "./components/Validation.js";
// import Validation2 from "./components/validation2";
import Validation3 from "./components/validation3";
import Check from "./components/Check";
import ToDo from "./components/ToDo.js";

// export const myContext = React.createContext();

function App() {
  return (
    <div className="App">
      <header className="App-header">To-Do App With CRUD</header>
      <ToDo />
      {/* <Counter /> */}
      {/* <Validation /> */}
      {/* <Fetching /> */}
      {/* <SignupForm /> */}
      {/* <Validation2 /> */}
      {/* <Validation3 /> */}
      {/* <Himanshu /> */}
      {/* <Check /> */}
    </div>
  );
}

export default App;
