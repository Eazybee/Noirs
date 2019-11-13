import React from 'react';
import Feature from './Feature/Feature';
import FeaturedIn from './FeaturedIn/FeaturedIn';
import Story from './Story/Story';
import NewsLetter from './NewsLetter/NewsLetter';

import {
  FeatureProps, StoriesProps, BecomeAHost, OurStory, GearProps, FeaturedInProps,
} from './data';

const Sections: React.FC = () => (
  <>
    <Feature  cards={FeatureProps.cards} title={FeatureProps.title} />
    <Story {...BecomeAHost} />
    <Feature {...StoriesProps} />
    <Story {...OurStory} />
    <FeaturedIn {...FeaturedInProps} />
    <Feature {...GearProps} />
    <NewsLetter />
  </>
);

export default Sections;
