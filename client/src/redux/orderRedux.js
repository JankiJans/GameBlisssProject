import shortid from 'shortid';

// actions
const createActionName = (actionName) => `app/products/${actionName}`;
const ADD_ORDER = createActionName('ADD_ORDER');
// action creators
export const addOrder = (payload) => ({ type: ADD_ORDER, payload });

const orderReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_ORDER:
      return [...statePart, { ...action.payload, id: shortid() }];
    default:
      return statePart;
  }
};
export default orderReducer;