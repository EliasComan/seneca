import { Route, Switch } from 'react-router';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/navbar/navBar.jsx';
import { BrowserRouter } from 'react-router-dom';

function App() {
 
  return (
    <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route exact path='/'>
          <ItemListContainer greeting='Bienvenidos'/>
        </Route>
        <Route exact path='/:id'>
          <ItemDetailContainer/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
