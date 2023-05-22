// write a boilerplate for the router

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";

import { GlobalProvider } from "./context/GlobalState";

import "./App.css";

function App() {
    return (
        <GlobalProvider>
        <Router>
            <Header />
            <div className="container">
            <Switch>
                <Route exact path="/">
                <Balance />
                <IncomeExpenses />
                <TransactionList />
                <AddTransaction />
                </Route>
                <Route path="/login">
                <h1>Login</h1>
                </Route>
                <Route path="/signup">
                <h1>Sign Up</h1>
                </Route>
            </Switch>
            </div>
        </Router>
        </GlobalProvider>
    );
    }

export default App;