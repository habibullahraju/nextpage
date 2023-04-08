import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './componenets/Header';
import Footer from './componenets/Footer';

const App = () => {
  return (
    <div>
      <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
      </div>
    </div>
  );
};

export default App;