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
import AddEmployee from "./pages/AddEmployee";
import AddProducts from "./pages/AddProducts";
import AddSells from "./pages/AddSells";
import ListSells from "./pages/ListSells";
import Login from "./pages/Login";
import ListRols from "./pages/ListRols";



function App() {
  return (
    <Router>
      <Switch>
        <Route path={['/listarproductos','/agregarproductos','/listarroles', '/agregarroles', '/listarventasadm','/agregarventasadm' ]}>
          <AdmLayout>
            <Switch>
            <Route path={['/listarproductos']}>
                <ListProducts/>
              </Route>
              <Route path={['/agregarproductos']}>
                <AddProducts/>
              </Route>
              <Route path={['/listarroles']}>
                <ListRols/>
              </Route>
              <Route path={['/agregarroles']}>
                <AddEmployee/>
              </Route>
              <Route path={['/listarventasadm']}>
                <ListSells/>
              </Route> 
              <Route path={['/agregarventasadm']}>
                <AddSells/>
              </Route> 
            </Switch>
          </AdmLayout>
        </Route> 
        <Route path={['/listarventas','/agregarventas' ]}>
          <PrivateLayout>
            <Switch>
            <Route path={['/listarventas']}>
                <ListSells/>
              </Route> 
              <Route path={['/agregarventas']}>
                <AddSells/>
              </Route> 
            </Switch>
          </PrivateLayout>
        </Route> 
        <Route path={['/']}>
          <LoginLayout>
            <Switch>
              <Route path={['/']}>
                <Login/>
              </Route>
            </Switch>
          </LoginLayout>
        </Route>
        <Route>
          <PublicLayout>
          </PublicLayout>
        </Route>

      </Switch>
    </Router>

  );
}

export default App;
