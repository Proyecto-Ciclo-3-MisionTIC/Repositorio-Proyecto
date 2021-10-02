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
import DeleteProducts from "./pages/DeleteProducts";
import Login from "./pages/Login";
import Sells from "./pages/Sells";
import Public from "./pages/Public";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={['/listarproductos','/agregarproductos','/buscarproductos','/actualizarproductos','/eliminarproductos']}>
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
              <Route path={['/eliminarproductos']}>
                <DeleteProducts/>
              </Route>
            </Switch>
          </AdmLayout>
        </Route> 
        <Route path={['/sells']}>
          <PrivateLayout>
            <Switch>
              <Route path={['/sells']}>
                <Sells/>
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
