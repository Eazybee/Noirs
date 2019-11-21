import React from "react";
import GlobaStyle from '../styles/global.css';
import Header from './Header/Header';
import Slide from './Slide/Slide';
import Sections from './Sections/Sections';
import Footer from './Footer/Footer';

const App: React.FC = () => (
  <>
    <GlobaStyle />
    <Header />
    <main>
      <Slide />
      <Sections />
    </main>
    <Footer/>
  </>
);

export default App;
