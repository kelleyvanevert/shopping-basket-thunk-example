
import apiFetchSavedCart from "./api";

// A "thunk" creator!
export default function loadSavedCart() {
  console.log("loadsavedcart");

  // Returning the thunk, which is like a promise:
  // Use the passed param `dispatch` in the future,
  //  when your data has been succesfully fetched
  return function (dispatch) {
    apiFetchSavedCart().then(savedCart => {
      console.log("data arrived");
      // (In fact, I'm every calling dispatch
      //  multiple times here, not really best practice)
      savedCart.forEach(product => {
        dispatch({
          type: "ADD_PRODUCT_TO_BASKET",
          payload: product
        })
      })
    })
  }
}
