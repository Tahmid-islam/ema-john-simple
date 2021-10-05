// use local storage as your db for now
const addToDb = (id) => {
  const storedCart = getStoredCart();
  if (id in storedCart) {
    storedCart[id] = storedCart[id] + 1;
  } else {
    storedCart[id] = 1;
  }
  updateDb(storedCart);
};

const updateDb = (cart) => {
  localStorage.setItem("shopping_cart", JSON.stringify(cart));
};

const removeFromDb = (id) => {
  const storedCart = getStoredCart();
  delete storedCart[id];
  updateDb(storedCart);
};

const getStoredCart = () => {
  const exists = localStorage.getItem("shopping_cart");
  return exists ? JSON.parse(exists) : {};
};

const clearTheCart = () => localStorage.removeItem("shopping_cart");

export { addToDb, removeFromDb, clearTheCart, getStoredCart };
