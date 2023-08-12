import React from "react";
import { DataCard } from "../../Cards/DataCard"

import { useNavigate } from "react-router-dom";

import "./Department.css";
export const Department = () => {
    const navigate = useNavigate();
    return (
        <div className="small-card-container">
            <div
                className="detail-card"
                onClick={() =>
                    navigate("/products", {
                        state: { type: "Kitchen" }
                    })
                }
            >
                Kitchen
            </div>
            <div
                className="detail-card"
                onClick={() =>
                    navigate("/products", {
                        state: { type: "Toys" }
                    })
                }
            >
                Toys
            </div>
            <div
                className="detail-card"
                onClick={() =>
                    navigate("/products", {
                        state: { type: "Clothing" }
                    })
                }
            >
                Clothing
            </div>
        </div>
    );
};
