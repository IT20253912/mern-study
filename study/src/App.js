import "./App.css";
import Main from "./Components/Main";
import { useState } from "react";

function App() {

  const [first, setfirst] = useState("testState");

  const name = "saman";
  const position = "engineer";

  const myObj = {
    name:`${name}`,
    position: `${position}`
  }

  return (
    <div>
      <div>chathudu</div>
      <p>add main component</p>
      <Main />
      <Main>{first}</Main>
      <Main>{myObj.name}</Main>
    </div>
  );
}
export default App;

