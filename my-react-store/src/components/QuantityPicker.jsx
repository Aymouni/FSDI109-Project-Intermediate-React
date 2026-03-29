import "./QuantityPicker.css";
import { useState } from "react";

function QuantityPicker(props) {
  const [quantity, setQuantity] = useState(1);

  function handleDecrease() {
    let nextVal = quantity - 1;
    if (nextVal > 0) {
      setQuantity(nextVal);
      props.onQuantityChange(nextVal); // Send new quantity up to Product
    }
  }

  function handleIncrease() {
    let nextVal = quantity + 1;
    setQuantity(nextVal);
    props.onQuantityChange(nextVal); // Send new quantity up to Product
  }

  return (
    <div className="d-flex align-items-center justify-content-center gap-2 mt-2">
      <button
        className="btn btn-outline-secondary btn-sm"
        onClick={handleDecrease}
        disabled={quantity === 1}
      >
        −
      </button>
      <span className="fw-bold px-2">{quantity}</span>
      <button
        className="btn btn-outline-secondary btn-sm"
        onClick={handleIncrease}
      >
        +
      </button>
    </div>
  );
}

export default QuantityPicker;
