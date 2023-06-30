import React, { createContext, useState } from "react";

// Créez le contexte du panier
export const CartContext = createContext();

// Créez le fournisseur du contexte du panier
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  // Fonction pour ajouter un produit au panier
  const addToCart = (product) => {
    // for (i = 0; i < quantity; i++) {
    //   newCart.push(product);
    // }
    let data = {
      ...product,
      quantity: quantity,
    };
    // let newCart = [...cartItems, data];
    const isExist =
      cartItems.filter((item) => item.id === product.id).length > 0;
    console.log("[...cartItems, { ...product, quantity: quantity }]", [
      ...cartItems,
      { ...product, quantity: quantity },
    ]);
    let newCart =
      isExist === true
        ? cartItems.map((item) =>
            item.id === product.id
              ? {
                  ...product,
                  quantity: Number(quantity) + Number(item.quantity),
                }
              : item
          )
        : [...cartItems, { ...product, quantity: quantity }];
    setCartItems(newCart);
  };

  const incrementQuantity = (item, index) => {
    const totalQuantity = item.quantity + 1;
    setQuantity(totalQuantity);
    updateTotalPrice();
    let data = cartItems;
    data[index].quantity = totalQuantity;
    setCartItems(data);
  };

  const decrementQuantity = (item, index) => {
    if (quantity > 1) {
      const totalQuantity = item.quantity - 1;
      setQuantity(totalQuantity);
      updateTotalPrice();
      let data = cartItems;
      data[index].quantity = totalQuantity;
      setCartItems(data);
    }
  };

  //Fonction pour mettre à jour le prix total
  const updateTotalPrice = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    setTotalPrice(total);
  };

  // Fonction pour supprimer un produit du panier
  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  // Fonction pour vider le panier
  const clearCart = () => {
    setCartItems([]);
  };

  // Fonction pour obtenir le nombre total d'articles dans le panier
  const getCartItemCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  // Valeur fournie par le contexte du panier
  const cartContextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    getCartItemCount,
    quantity,
    setQuantity,
    totalPrice,
    updateTotalPrice,
    decrementQuantity,
    incrementQuantity,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};
