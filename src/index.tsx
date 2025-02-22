import React, { FunctionComponent, StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import reportWebVitals from './reportWebVitals';
import { ApolloProvider } from '@apollo/client';
import { client } from './client';
import { TestComponent } from './TestComponent';

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser');
  worker.start();
}

export const App: FunctionComponent = () => (
  <StrictMode>
    <ApolloProvider client={client}>
      <TestComponent />
    </ApolloProvider>
  </StrictMode>
)

ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
