import React from "react";
import { ProductContext } from "../../Context/ProductContext";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { Button } from "../../Cards/Button"

import "./Products.css";


export const Products = () => {
    const { state } = useLocation();
    const { products } = React.useContext(ProductContext);
    const navigate = useNavigate();
    const [showLowStockItem, setShowLowStockItem] = React.useState(false);
    const [sortBy, setSortBy] = React.useState("name");
    const [selectedType, setSelectedType] = React.useState(state?.type ?? "all");
    const filterProducts = products
        .filter((product) => (showLowStockItem ? product.stock <= 10 : true))
        .filter((product) =>
            selectedType === "all" ? true : selectedType === product.department
        );
    filterProducts.sort((p1, p2) => {
        if (sortBy === "name") {
            return p1.name < p2.name ? -1 : p1.name > p2.name ? 1 : 0;
        }
        if (sortBy === "stock") {
            return p1.stock - p2.stock;
        }
        if (sortBy === "price") {
            return p1.price - p2.price;
        }
        return 0;
    });
    return (
        <div className="page-container">
            <div className="header">
                <h2>Products</h2>
                <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                >
                    <option value="all">All Departments</option>
                    <option value="Kitchen">Kitchen</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Toys">Toys</option>
                </select>
                <div className="label-input-container">
                    <input
                        type="checkbox"
                        checked={showLowStockItem}
                        onChange={() => {
                            setShowLowStockItem(!showLowStockItem);
                        }}
                    />
                    <span>Low Stock Item</span>
                </div>
                <div className="label-input-container">
                    <span>SortBy</span>
                    <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                        <option value="name">Name</option>
                        <option value="price">Price</option>
                        <option value="stock">Stock</option>
                    </select>
                </div>
                <Button
                    onClick={() => {
                        navigate("/add-product");
                    }}
                >
                    Add New
                </Button>
            </div>
            <table>
                <tbody>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Supplier</th>
                    </tr>
                    {filterProducts.map((product) => (
                        <tr key={product.id}>
                            <td>
                                <img
                                    className="product-image"
                                    src={product.imageUrl}
                                    alt={product.name}
                                />
                            </td>
                            <td>
                                <Link className="product-link" to={`/products/${product.id}`}>
                                    {product.name}
                                </Link>
                            </td>
                            <td>{product.description}</td>
                            <td>${product.price}</td>
                            <td>{product.stock}</td>
                            <td>{product.supplier}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
