import axios from "axios";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

const CountryContext = createContext();

const initialState = {
  all_countries: [],
  filtered_countries: [],
  isLoading: true,
  isError: false,
  single_country: [],
  single_loading: true,
  single_error: false,
  sort: "a-z",
  filters: {
    text: "",
    region: "all",
  },
};

const CountryProvider = ({ children }) => {
  return (
    <CountryContext.Provider value={{}}>{children}</CountryContext.Provider>
  );
};
export const useCountryProvider = () => {
  return useContext(CountryContext);
};

export default CountryProvider;
