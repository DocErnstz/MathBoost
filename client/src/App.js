import React from "react";
import { client } from "./ApolloClient/client";
import { ApolloProvider } from '@apollo/client';
import logo from './logo.svg';
import './App.css';
import ExchangeRatePage from "./testComponent.js";

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
      <ExchangeRatePage/>
    </div>
    </ApolloProvider>
  );
}

export default App;
