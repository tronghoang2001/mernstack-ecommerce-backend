import { useState } from "react";

const Quantity = () => {
  const [quantity, setQuantity] = useState(1);
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevCount) => prevCount - 1);
    }
  };
  const handleIncrement = () => {
    setQuantity((prevCount) => prevCount + 1);
  };
  return (
    <div className="input-group">
      <button
        type="button"
        onClick={handleDecrement}
        className="input-group-text"
      >
        -
      </button>
      <input
        style={{ backgroundColor: "#ffffff" }}
        type="text"
        value={quantity}
        readOnly
        className="form-control text-center"
      />
      <button
        type="button"
        onClick={handleIncrement}
        className="input-group-text"
      >
        +
      </button>
    </div>
  );
};

export default Quantity;
