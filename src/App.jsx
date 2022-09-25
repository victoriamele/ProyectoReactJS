import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemList/ItemListContainer";


function App() {
  let estilo = { backgroundColor: "lightgreen" };
  
  return (
    <div style={ estilo } className="App">
      <NavBar />
      <ItemListContainer
        greeting="Bienvenido a nuestro vivero"
      />
    </div>
  );
}

export default App;