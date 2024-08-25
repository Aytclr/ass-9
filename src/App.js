import "./App.scss";
import Header from "./components/Header.jsx"
import CardContainer from "./components/CardContainer.jsx";
import { data } from "./helper/data.js";


function App() {
  return (
    <div>
      <Header/>
      <CardContainer dataA={data} />
    </div>
  );
}

export default App;
