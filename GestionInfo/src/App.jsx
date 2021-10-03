import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PrivateLayout from "./layouts/PrivateLayout";
import AdmLayout from "./layouts/AdmLayout";
import LoginLayout from "./layouts/LoginLayout";
import PublicLayout from "./layouts/PublicLayout";
import ListProducts from "./pages/ListProducts";
import AddProducts from "./pages/AddProducts";
import SearchProducts from "./pages/SearchProducts";
import UpdateProducts from "./pages/UpdateProducts";
import UpdateSells from "./pages/UpdateSells";
import AddSells from "./pages/AddSells";
import SearchSells from "./pages/SearchSells";
import ListSells from "./pages/ListSells";
import Login from "./pages/Login";
import Public from "./pages/Public";
import ListRols from "./pages/ListRols";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={['/listarproductos','/agregarproductos','/buscarproductos','/actualizarproductos','/eliminarproductos','/listarroles' ]}>
          <AdmLayout>
            <Switch>
            <Route path={['/listarproductos']}>
                <ListProducts/>
              </Route>
              <Route path={['/agregarproductos']}>
                <AddProducts/>
              </Route>
              <Route path={['/buscarproductos']}>
                <SearchProducts/>
              </Route>
              <Route path={['/actualizarproductos']}>
                <UpdateProducts/>
              </Route>
              <Route path={['/listarroles']}>
                <ListRols/>
              </Route>
            </Switch>
          </AdmLayout>
        </Route> 
        <Route path={['/listarventas','/agregarventas','/buscarventas', '/actualizarventas' ]}>
          <PrivateLayout>
            <Switch>
            <Route path={['/listarventas']}>
                <ListSells/>
              </Route> 
              <Route path={['/agregarventas']}>
                <AddSells/>
              </Route> 
              <Route path={['/buscarventas']}>
                <SearchSells/>
              </Route> 
              <Route path={['/actualizarventas']}>
                <UpdateSells/>
              </Route> 
            </Switch>
          </PrivateLayout>
        </Route> 
        <Route path={['/login']}>
          <LoginLayout>
            <Switch>
              <Route path={['/login']}>
                <Login/>
              </Route>
            </Switch>
          </LoginLayout>
        </Route>
        <Route path={['/']}>
          <PublicLayout>
          <Switch>
              <Route path={['/']}>
                <Public/>
              </Route>
            </Switch>
          </PublicLayout>
        </Route>

      </Switch>
    </Router>

  );
}

export default App;
