import React from "react";
import GlobaStyle from '../styles/global.css';
import Header from './Header/Header';
import Slide from './Slide/Slide';
import Feature from './Sections/Feature/Feature';
import FeaturedIn from './Sections/FeaturedIn/FeaturedIn';
import Story from './Sections/Story/Story';
import {
  FeatureProps, StoriesProps, BecomeAHost, OurStory, GearProps, FeaturedInProps,
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
      <FeaturedIn {...FeaturedInProps}/>
      <Feature {...GearProps}/>
    </main>
  </>
);

export default App;
