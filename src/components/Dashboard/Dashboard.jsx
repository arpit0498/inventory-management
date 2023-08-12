import React from "react";
import { ProductContext } from "../../Context/ProductContext";

import "./Dashboard.css";

export const Dashboard = () => {
    const { products } = React.useContext(ProductContext);
    console.log(products);
    const totalStock = products.reduce((total, product) => {
        // + to covert string to number
        return total + Number(product.stock);
    }, 0);
    const totalDeliver = products.reduce(
        // + to covert string to number
        (total, product) => total + Number(product.delivered),
        0
    );
    const lowStockItems = products.reduce(
        (total, product) => (product.stock <= 10 ? total + 1 : total),
        0
    );
    return (
        <div className="small-card-container">

            <div className="detail-card">
                <div className="number-card" style={{ color: "green" }}>
                    {totalStock}
                </div>
                <p className="title">Total Stock</p>
            </div>
            <div className="detail-card">
                <div className="number-card" style={{ color: "#FFA81E" }}>
                    {totalDeliver}
                </div>
                <p className="title">Total Delivered</p>
            </div>
            <div className="detail-card">
                <div className="number-card" style={{ color: "red" }}>
                    {lowStockItems}
                </div>
                <p className="title">Low Stock Items</p>
            </div>
        </div>
    );
};
