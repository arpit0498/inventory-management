import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./components/Dashboard/Dashboard.jsx";
import { Department } from "./components/Departments/Department.jsx";
import { Products } from "./components/Products/Products.jsx";
import { AddProduct } from "./components/AddProduct/AddProduct.jsx";
import { Menu } from "./components/Menu/Menu.jsx"
import { PageWrapper } from "./Cards/PageWrapper.jsx";
import { ProductDetails } from "./components/ProductDetails/ProductDetails.jsx";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      {/* <h2>Inventory Manangement</h2> */}
      <div className="content-container">
        {/* <Menu /> */}
        <div className="content">
          <PageWrapper>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/department" element={<Department />} />
              <Route path="/products" element={<Products />} />
              <Route path="/add-product" element={<AddProduct />} />
              <Route path="/products/:productId" element={<ProductDetails />} />
            </Routes>
          </PageWrapper>
        </div>
      </div>
    </div>
  );
}
