import React, { useState } from 'react';
import './SweetCard.css';

function SweetCard({ sweet, onPurchase }) {
    const [quantity, setQuantity] = useState(1);

    const handlePurchase = () => {
        if (quantity > 0 && quantity <= sweet.quantityInStock) {
            onPurchase(sweet.id, quantity);
            setQuantity(1);
        }
    };

    const isOutOfStock = sweet.quantityInStock === 0;

    return (
        <div className="sweet-card">
            <div className="sweet-header">
                <h3>{sweet.name}</h3>
                <span className="category-badge">{sweet.category}</span>
            </div>

            <div className="sweet-details">
                <p className="price">${sweet.price.toFixed(2)}</p>
                <p className="stock">
                    Stock: {sweet.quantityInStock}
                    {isOutOfStock && <span className="out-of-stock"> (Out of Stock)</span>}
                </p>
            </div>

            <div className="purchase-section">
                <input
                    type="number"
                    min="1"
                    max={sweet.quantityInStock}
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                    disabled={isOutOfStock}
                />
                <button
                    className="btn-purchase"
                    onClick={handlePurchase}
                    disabled={isOutOfStock || quantity > sweet.quantityInStock}
                >
                    {isOutOfStock ? 'Out of Stock' : 'Purchase'}
                </button>
            </div>
        </div>
    );
}

export default SweetCard;
