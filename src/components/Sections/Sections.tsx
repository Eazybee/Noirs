import React from 'react';
import Feature from './Feature/Feature';
import FeaturedIn from './FeaturedIn/FeaturedIn';
import NewsLetter from './NewsLetter/NewsLetter';

import {
  FeatureProps, StoriesProps, FeaturedInProps,
} from './data';

const Sections: React.FC = () => (
  <>
    <Feature  {...FeatureProps}/>
    <Feature {...StoriesProps} />
    <FeaturedIn {...FeaturedInProps} />
    <NewsLetter />
  </>
);

export default Sections;
