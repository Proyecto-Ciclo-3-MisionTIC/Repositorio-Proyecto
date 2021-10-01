import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PrivateLayout from "./layouts/PrivateLayout";
import AdmLayout from "./layouts/AdmLayout";
import LoginLayout from "./layouts/LoginLayout";
import PublicLayout from "./layouts/PublicLayout";
import Products from "./pages/Products";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={['/products']}>
          <AdmLayout>
            <Switch>
              <Route path={['/products']}>
                <Products/>
              </Route>
            </Switch>
          </AdmLayout>
        </Route> 
        <Route>
          <PrivateLayout>
          </PrivateLayout>
        </Route> 
        <Route path={['/login']}>
          

                <Login/>

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
