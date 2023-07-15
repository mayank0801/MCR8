import { createContext, useReducer } from "react";
import { Meetdata } from "../Data/Data";

export const DataContext = createContext();

export default function DataContextProvider({ children }) {
  function reducer(state, action) {
    switch (action.type) {
      case "SET_SEACH_VALUE":
        return { ...state, searchValue: action.payload };
      case "SET_SEACH_TYPE":
        return { ...state, searchType: action.payload };
      case "ADD_EVENT": {
        return { ...state, RSVP: [...state.RSVP, action.payload] };
      }
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, {
    data: Meetdata,
    searchValue: "",
    searchType: "Offline",
    RSVP: []
  });
  return (
    <DataContext.Provider value={{ data: state.data, state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
}
