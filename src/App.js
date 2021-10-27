import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Contador from './Components/contador/Contador.jsx';
import NavBar from './Components/navbar/navBar.jsx';

function App() {
 
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting='Bienvenidos!' />
      <Contador inicial = {1} cantidad={10}/>
    </div>
  );
}

export default App;
