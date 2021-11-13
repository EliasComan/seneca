import { Route, Switch } from 'react-router';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/navbar/navBar.jsx';
import { BrowserRouter } from 'react-router-dom';
import '../src/App.css'

function App() {
 
  return (
    <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route exact path='/'>
          <ItemListContainer greeting='Bienvenidos'/>
        </Route>
        <Route exact path='/:category'>
          <ItemListContainer greeting='Bienvenidos'/>
        </Route>
        <Route exact path='/:category/:id'>
          <ItemDetailContainer/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
