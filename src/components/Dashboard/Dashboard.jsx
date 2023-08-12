import "./Dashboard.css";

export const Dashboard = () => {
    return (
        <div className="small-card-container">
            <div className="detail-card">
                <p className="count stock">283</p>
                <p className="title">Total Stock</p>
            </div>
            <div className="detail-card">
                <p className="count delivered">9329</p>
                <p className="title">Total Delivered</p>
            </div>
            <div className="detail-card">
                <p className="count low-stock">83</p>
                <p className="title">Low Stock Items</p>
            </div>
        </div>
    );
};
