import { useState , useEffect } from "react";


function Cart() {
  const [cart, setCart] = useState([]);

  // Load cart items from localStorage on initial render
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  // Function to remove an item from the cart
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Calculate the total price
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((product) => (
            <div key={product.id} className="cart-item">
              <img
                src={product.image}
                alt={product.title}
                className="cart-item-image"
              />
              <div className="cart-item-info">
                <h3>{product.title}</h3>
                <p>Price: ${product.price}</p>
                <p>Quantity: {product.quantity}</p>
                <button
                  onClick={() => removeFromCart(product.id)}
                  className="remove-from-cart-button"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {cart.length > 0 && (
        <div className="cart-total">
          <h2>Total: ${calculateTotal()}</h2>
        </div>
      )}
    </div>
  );
}

export default Cart;