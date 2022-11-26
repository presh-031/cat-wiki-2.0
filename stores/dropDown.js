import { createStore, createHook } from "react-sweet-state";

const Store = createStore({
  // value of the store on initialisation
  initialState: {
    isShowing: false,
  },
  // actions that trigger store mutation
  actions: {
    setDropDown:
      () =>
      ({ setState, getState }) => {
        // mutate state synchronously
        setState({
          isShowing: !getState().isShowing,
        });
      },
  },
  // optional, mostly used for easy debugging
  name: "drop-down",
});

export const useDropDown = createHook(Store);
