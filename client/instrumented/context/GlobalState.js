import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

// Initial state
const initialState = {
  transactions: [],
  users: [],
  error: null,
  loading: true,
  isLogged: false,
  name: null,
};


// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  async function getTransactions() {
    try {
      const res = await axios.get("/api/v1/transactions");

      dispatch({
        type: "GET_TRANSACTIONS",
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: err.response.data.error,
      });
    }
  }

  async function deleteTransaction(id) {
    try {
      await axios.delete(`/api/v1/transactions/${id}`);

      dispatch({
        type: "DELETE_TRANSACTION",
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: err.response.data.error,
      });
    }
  }

  async function addTransaction(transaction) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/api/v1/transactions", transaction, config);

      dispatch({
        type: "ADD_TRANSACTION",
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: err.response.data.error,
      });
    }
  }

  async function login() {
    try {
      console.log("login");
      const res = await axios.get("/api/v1/users/login/6476cc44df56f113102af36d");
      console.log(res.data);
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: "LOGIN_FAIL",
        payload: err.response.data.error,
      });
    }
  }

  async function register(user) {
    try {
      console.log(user);
      const res = await axios.post("/api/v1/users/signup", user);
      dispatch({
        type: "ADD_USER",
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: "REGISTER_FAIL",
        payload: err.response.data.error,
      });
    }
  }

  async function logout() {
      dispatch({
        type: "LOGOUT",
      });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        error: state.error,
        loading: state.loading,
        isLogged: state.isLogged,
        name: state.name,
        getTransactions,
        deleteTransaction,
        addTransaction,
        login,
        register,
        logout,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
