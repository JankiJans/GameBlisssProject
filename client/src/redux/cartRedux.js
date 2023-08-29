//selectors
export const getCart = ({ cart }) => cart;
export const getCartById = ({ cart }, id) => cart.find((cart) => cart.id === id);
// actions
const createActionName = (actionName) => `app/products/${actionName}`;
const ADD_CART = createActionName('ADD_AD');
// action creators
export const addCart = (payload) => ({ type: ADD_CART, payload });

const cartReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_CART:
      let index = statePart.findIndex((cart) => cart.id === action.payload.id);

      if (index === -1) return [...statePart, action.payload];
      return statePart;
    default:
      return statePart;
  }
};
export default cartReducer;