//selectors
export const getProducts = ({ products }) => products;
export const getProductsCategory = ({ products }) => products.filter((product) => product.category);

export const getProductsById = (state, id) => { return state.products.find(x => x.id === id);};

export const searchProducts = (searchPhrase) => ({ type: SEARCH_PRODUCTS, payload: searchPhrase });


// actions
const createActionName = (actionName) => `app/products/${actionName}`;
const UPDATE_PRODUCTS = createActionName('UPDATE_PRODUCTS');
const SEARCH_PRODUCTS = createActionName('SEARCH_PRODUCTS');
// action creators
export const updateProducts = (payload) => ({ type: UPDATE_PRODUCTS, payload });

const initialState = {
  data: [],
  requests: {},
};

const productsReducer = (statePart = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_PRODUCTS:
      return [...action.payload];
    case SEARCH_PRODUCTS:
      return statePart.filter((prod) => prod.name.includes(action.payload));
    default:
      return statePart;
  }
};

export default productsReducer;
