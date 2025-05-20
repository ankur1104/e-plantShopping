import React, { useState } from 'react';
import './ProductList.css';
import CartItem from './CartItem';

function ProductList({ onHomeClick }) {
    const [showCart, setShowCart] = useState(false);
    const [showPlants, setShowPlants] = useState(false);

    const toggleCart = () => setShowCart(!showCart);
    const togglePlants = () => setShowPlants(!showPlants);

    const plantsArray = [
        // ... [Same plant data as before, not modified for brevity]
    ];

    return (
        <div className="product-list-container">
            <div className="navbar">
                <button onClick={onHomeClick}>Home</button>
                <button onClick={togglePlants}>Explore Plants</button>
                <button onClick={toggleCart}>Cart</button>
            </div>

            {showPlants && (
                <div className="plants-section">
                    {plantsArray.map((category, index) => (
                        <div key={index} className="plant-category">
                            <h2>{category.category}</h2>
                            <div className="plant-items">
                                {category.plants.map((plant, idx) => (
                                    <div key={idx} className="plant-card">
                                        <img src={plant.image} alt={plant.name} />
                                        <h3>{plant.name}</h3>
                                        <p>{plant.description}</p>
                                        <p className="price">{plant.cost}</p>
                                        <button>Add to Cart</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {showCart && (
                <div className="cart-section">
                    <CartItem />
                </div>
            )}
        </div>
    );
}

export default ProductList;
