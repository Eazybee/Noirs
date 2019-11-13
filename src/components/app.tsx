import React from "react";
import GlobaStyle from '../styles/global.css';
import Header from './Header/Header';
import Slide from './Slide/Slide';
import Feature from './Sections/Feature/Feature';
import Story from './Sections/Story/Story';
import {
  FeatureProps, StoriesProps, BecomeAHost, OurStory, GearProps,
} from './data';

const App = () => (
  <>
    <GlobaStyle />
    <Header />
    <main>
      <Slide />
      <Feature  cards={FeatureProps.cards} title={FeatureProps.title}/>
      <Story {...BecomeAHost}/>
      <Feature {...StoriesProps}/>
      <Story {...OurStory}/>
      <Feature {...GearProps}/>
    </main>
  </>
);

export default App;
