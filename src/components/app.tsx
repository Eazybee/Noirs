import React from "react";
import GlobaStyle from '../styles/global.css'
import Header from './Header/Header'
import Slide from './Slide/Slide'
import Feature from './Sections/Feature/Feature'
import { FeatureProps, StoriesProps  } from './data';

const App = () => (
  <>
    <GlobaStyle />
    <Header />
    <main>
      <Slide />
      <Feature  cards={FeatureProps.cards} title={FeatureProps.title}/>
      <Feature {...StoriesProps}/>
    </main>
  </>
);

export default App;
