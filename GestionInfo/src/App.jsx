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
import AddProducts from "./pages/AddProducts";
import Login from "./pages/Login";
import Sells from "./pages/Sells";
import Public from "./pages/Public";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={['/addproducts']}>
          <AdmLayout>
            <Switch>
              <Route path={['/addproducts']}>
                <AddProducts/>
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
