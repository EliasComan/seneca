import './App.css';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/navbar/navBar.jsx';

function App() {
 
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting='Bienvenidos'/>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
