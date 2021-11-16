import { Route, Switch } from 'react-router';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/navbar/navBar.jsx';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Components/Footer/Footer'
import Cart from './Components/cart/Cart'
import '../src/App.css'

function App() {
 
  return (
    <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route exact path='/cart'>
          <Cart/>
        </Route>
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
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
