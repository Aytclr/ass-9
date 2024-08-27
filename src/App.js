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



//! KALAN YAPILAR


// 2.İNPUT SEARCH KISMI İÇİN ARANAN KELİME ÖZLELLİKLERİNE GÖRE FİLTRELEME YAPILACAK

// 3.PLAYER CARD LARI UZERİNE GELİNDİĞİNDE İSTATİSTİK KISMI GÖRÜNECEK 