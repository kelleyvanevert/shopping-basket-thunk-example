
export default
  function reducer(
    currentState = initialState,
    action
  ) {
    console.log("action", action);
    switch (action.type) {
      case "CLEAR_BASKET": {
        return {
          ...currentState,
           cart: []
        };
      }
      case "ADD_PRODUCT_TO_BASKET": {
        currentState = {
          ...currentState,
           cart: [
            ...currentState.cart,
            action.payload
           ]
        }
        console.log("new state", currentState)
        return currentState;
      }
      default:
        return currentState;
    }
  }

const initialState = {
  cart: [],
  products: []
};

