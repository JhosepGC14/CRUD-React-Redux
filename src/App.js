import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import {
  BrowserRouter as Router
} from 'react-router-dom'
import MainRoutes from './routes';

//Redux
import { Provider } from "react-redux";
import store from "./store"

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <Main>
          <MainRoutes />
        </Main>
        <Footer />
      </Provider>
    </Router>
  );
}

export default App;
