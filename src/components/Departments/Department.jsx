export const Department = () => {
    const categories = ["Kitchen", "Clothing", "Toys"];

    return (
        <div className="small-card-container">
            {categories.map((category) => (
                <div className="detail-card">
                    <p style={{ fontWeight: 800 }}>{category}</p>
                </div>
            ))}
        </div>
    );
};
