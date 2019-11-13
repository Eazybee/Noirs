import React from 'react';
import Title from '../reuseables/Title/Title';
import Style from './style.css';

interface StoryProps {
  title: string,
  text: string,
  hasButtons?: boolean,
};

const Story: React.FC<StoryProps> = ({ title, text, hasButtons }) => (
  <Style>
    <Title>{title}</Title>
    <p>{text}</p>
    {hasButtons && (
      <span>
        <button>Become A Host</button>
        <button>Join Noirbnb Hosts Community</button>
      </span>
    )}
  </Style>
);

export default Story;
