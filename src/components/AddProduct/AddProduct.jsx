import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../Cards/Button"
import { ProductContext } from "../../Context/ProductContext";
import "./AddProduct.css";

export const AddProduct = () => {
    const [formData, setFormData] = React.useState({
        department: "Kitchen"
    });
    const [showError, setShowError] = React.useState(false);
    const { addProduct } = React.useContext(ProductContext);
    const navigate = useNavigate();

    const handleChange = (e) => {
        if (showError) setShowError(false);
        const value =
            e.target.name === "price" ||
                e.target.name === "stocks" ||
                e.target.name === "delivered"
                ? Number(e.target.value)
                : e.target.value;
        setFormData({
            ...formData,
            [e.target.name]: value
        });
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (
            !formData.name ||
            !formData.price ||
            !formData.stock ||
            !formData.supplier ||
            !formData.delivered ||
            !formData.imageUrl
        ) {
            setShowError(true);
            return;
        }
        addProduct(formData);
        navigate("/products");
    };

    return (
        <div className="page-container">
            <h2>Add New Product</h2>
            <form className="form">
                <div className="label-input-container">
                    <p>
                        Department<span className="required-text">*</span>
                    </p>
                    <select
                        className="select"
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        required
                    >
                        <option value="Kitchen">Kitchen</option>
                        <option value="Clothing">Clothing</option>
                        <option value="Toys">Toys</option>
                    </select>
                </div>
                <div className="label-input-container">
                    <p>
                        Name<span className="required-text">*</span>
                    </p>
                    <input
                        className="input"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="label-input-container">
                    <p>Description</p>
                    <textarea
                        className="textarea"
                        name="description"
                        value={formData.description}
                        onInput={handleChange}
                        rows={4}
                    />
                </div>
                <div className="label-input-container">
                    <p>
                        Price<span className="required-text">*</span>
                    </p>
                    <input
                        className="input"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        type="number"
                        required
                    />
                </div>
                <div className="label-input-container">
                    <p>
                        Stock<span className="required-text">*</span>
                    </p>
                    <input
                        className="input"
                        name="stock"
                        value={formData.stock}
                        onChange={handleChange}
                        type="number"
                        required
                    />
                </div>
                <div className="label-input-container">
                    <p>SKU</p>
                    <input
                        className="input"
                        name="sku"
                        value={formData.sku}
                        onChange={handleChange}
                    />
                </div>
                <div className="label-input-container">
                    <p>
                        Supplier<span className="required-text">*</span>
                    </p>
                    <input
                        className="input"
                        name="supplier"
                        value={formData.supplier}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="label-input-container">
                    <p>
                        Delivered<span className="required-text">*</span>
                    </p>
                    <input
                        className="input"
                        name="delivered"
                        value={formData.delivered}
                        onChange={handleChange}
                        type="number"
                        required
                    />
                </div>
                <div className="label-input-container">
                    <p>
                        Image URL<span className="required-text">*</span>
                    </p>
                    <input
                        className="input"
                        name="imageUrl"
                        value={formData.imageUrl}
                        onChange={handleChange}
                        required
                    />
                </div>
                <Button
                    type="submit"
                    className="submit-button"
                    onClick={handleOnSubmit}
                >
                    Add Product
                </Button>
                {showError && (
                    <span className="required-text">**Fill Required Fields**</span>
                )}
            </form>
        </div>
    );
};
