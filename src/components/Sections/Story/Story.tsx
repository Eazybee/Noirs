import React from 'react';
import Title from '../reuseables/Title/Title';
import Style from './style.css';

interface StoryProps {
  title?: string,
  text: string,
  hasButtons?: boolean,
};

const Story: React.FC<StoryProps> = ({ title, text, hasButtons }) => (
  <Style>
    {title && <Title>{title}</Title>}
    <p>{text}</p>
    {hasButtons && (
      <span>
        <button>Learn More</button>
        <button>Contact Us</button>
      </span>
    )}
  </Style>
);

export default Story;
