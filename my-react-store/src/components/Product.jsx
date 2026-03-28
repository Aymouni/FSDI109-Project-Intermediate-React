import "./Product.css";
import QuantityPicker from "./QuantityPicker";
import { useState } from "react";

function Product(props)
{
    const [quantity, setQuantity] = useState(1); // Tracks quantity from QuantityPicker

    const total = (props.data.price * quantity).toFixed(2); // Calculate total when quantity changes

    return(
        <div className="card h-100 shadow-sm">
            <img
                src={"/images/" + props.data.image}
                alt="product"
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{props.data.title}</h5>
                <div className="d-flex justify-content-between mb-2">
                    <span className="text-success fw-bold">${props.data.price.toFixed(2)}</span>
                    <span className="text-muted small">Total: ${total}</span>
                </div>
                <div className="mt-auto">
                    <QuantityPicker onQuantityChange={setQuantity} />
                </div>
            </div>
        </div>
    )
}

export default Product;