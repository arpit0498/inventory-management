import React from 'react'
import { inventoryData } from "../productData";
import { v4 as uuid } from "uuid";

export const ProductContext = React.createContext();

const KEY = "inventory";

const loadData = () => {
    return JSON.parse(localStorage.getItem(KEY)) ?? inventoryData;
};


export const ProductContextProvider = ({ children }) => {
    const [products, setProducts] = React.useState(loadData);

    React.useEffect(() => {
        localStorage.setItem(KEY, JSON.stringify(products));
    }, [products]);

    return (
        <ProductContext.Provider
            value={{
                products
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};

export const useProductContext = () => {
    return React.useContext(ProductContext);
};