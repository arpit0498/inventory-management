import React from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../Context/ProductContext";
import "./ProductDetails.css";

export const ProductDetails = () => {
    const { productId } = useParams();
    const { products } = React.useContext(ProductContext);
    const product = products.find((prod) => String(prod.id) === productId);
    return (
        <div className="main-container">
            <h2>{product.name}</h2>
            <div className="details-wrapper">
                <img className="product-image" src={product.imageUrl} alt="img" />
                <p>Price: ${product.price}</p>
                <p>Stock: {product.stock}</p>
                <p>Supplier: {product.supplier}</p>
                <p>Department: {product.department}</p>
                <p>SKU: {product.sku}</p>
                <p>Delivered: {product.delivered}</p>
                <p>Description: {product.description}</p>
            </div>
        </div>
    );
};
