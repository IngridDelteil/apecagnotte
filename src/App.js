import React from "react";
import {Routes, Route} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Bureau from "./pages/Bureau";
import Agenda from "./pages/Agenda";
import Actions from "./pages/Actions";
import Projets from "./pages/Projets";
import Rejoindre from "./pages/Rejoindre";
import Oups from "./pages/Oups";

const App = () => {
  return (
    <div className='App'>
      <Header />
      <ScrollToTop>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/bureau' exact element={<Bureau />} />
          <Route path='/agenda' exact element={<Agenda />} />
          <Route path='/actions' exact element={<Actions />} />
          <Route path='/projets' exact element={<Projets />} />
          <Route path='/rejoindre' exact element={<Rejoindre />} />
          <Route path='*' element={<Oups />} />
        </Routes>
      </ScrollToTop>
      <Footer />
    </div>
  );
};

export default App;
