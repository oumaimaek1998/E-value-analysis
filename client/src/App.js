import { BrowserRouter } from "react-router-dom";
import Header from "../src/components/Header/Header";
import Main from "../src/components/Main/Main";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div style={{ height: "100%" }}>
        <Header />
        <div>
          <Main />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
