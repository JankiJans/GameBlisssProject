// selectors
export const getUser = (state) => state.email;
export const getUserById = (state) => state.id;

// actions
const createActionName = (actionName) => `app/users/${actionName}`;
const LOG_IN = createActionName('LOG_IN');
const LOG_OUT = createActionName('LOG_OUT');

// action creators
export const logIn = (payload) => {
  localStorage.setItem('loggedInUser', payload.email);
  localStorage.setItem('loggedInUserId', payload.id);
  return {
    type: LOG_IN,
    payload,
  };
};

export const logOut = () => {
  localStorage.removeItem('loggedInUser');
  localStorage.removeItem('loggedInUserId');
  return {
    type: LOG_OUT,
  };
};

const SAVE_USER_TO_LOCAL_STORAGE = createActionName('SAVE_USER_TO_LOCAL_STORAGE');
export const saveUserToLocalStorage = () => ({
  type: SAVE_USER_TO_LOCAL_STORAGE,
});

const initialState = {
  login: localStorage.getItem('loggedInUser') || null,
  id: localStorage.getItem('loggedInUserId') || null,
  request: { pending: false, error: null, success: false },
};

const usersReducer = (statePart = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return { ...statePart, email: action.payload.email, id: action.payload.id };
    case LOG_OUT:
      return { ...statePart, login: null, id:null };
    case SAVE_USER_TO_LOCAL_STORAGE:
      localStorage.setItem('loggedInUser', JSON.stringify(statePart.login));
      localStorage.setItem('loggedInUserId', JSON.stringify(statePart.id));
      return statePart;
    default:
      return statePart;
  }
};

export default usersReducer;
