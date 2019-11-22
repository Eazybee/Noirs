import React, { lazy, Suspense } from 'react';
import FeaturedIn from './FeaturedIn/FeaturedIn';
import Story from './Story/Story';
import NewsLetter from './NewsLetter/NewsLetter';

const Feature = lazy(() =>import('./Feature/Feature'));
import {
  FeatureProps, StoriesProps, BecomeAHost, OurStory, GearProps, FeaturedInProps,
} from './data';

const Sections: React.FC = () => (
  <>
    <Suspense fallback={<div>Loading...</div>}>
      <Feature  cards={FeatureProps.cards} title={FeatureProps.title} />
      <Story {...BecomeAHost} />
      <Feature {...StoriesProps} />
      <Story {...OurStory} />
      <FeaturedIn {...FeaturedInProps} />
      <Feature {...GearProps} />
    </Suspense>
    <NewsLetter />
  </>
);

export default Sections;
