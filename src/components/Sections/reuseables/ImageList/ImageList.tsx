import React from 'react'
import Style from './style.css';


interface ImageListProps {
  data: {
      src: string,
      title: string,
    }[],
};

const ImageList:React.FC<ImageListProps> = ({ data }) => (
  <Style>
    {data.map((img, ind) =>
      <span key={ind}>
        <img src={img.src} title={img.title} />
      </span>
    )}
  </Style>
);


export default ImageList;
