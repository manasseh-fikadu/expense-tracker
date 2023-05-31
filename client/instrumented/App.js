import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";
import SignUpPage from "./components/SignUp";
import SignInPage from "./components/Login";
import { Links } from "./components/Links";

import { GlobalProvider } from "./context/GlobalState";

import "./App.css";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Links />
        <Header />
        <Switch>
          <Route exact path="/login" component={SignInPage} />
          <Route exact path="/register" component={SignUpPage} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

const Home = () => (
  <div className="container">
    <Balance />
    <IncomeExpenses />
    <TransactionList />
    <AddTransaction />
  </div>
);

export default App;
