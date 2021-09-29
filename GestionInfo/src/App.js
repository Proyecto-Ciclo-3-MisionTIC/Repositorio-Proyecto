import "./App.css";
import Menu from "./components/menu";
import { ProductForm } from "./components/productForm";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Menu />
      <ProductForm />
    </div>
  );
}

export default App;
