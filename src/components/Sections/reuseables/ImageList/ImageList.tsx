import React, { useState } from 'react';
import LazyLoad from 'react-lazy-load';
import Style from './style.css';


interface ImageListProps {
  data: {
      src: string,
      title: string,
    }[],
};

const ImageList:React.FC<ImageListProps> = ({ data }) => {
  const [loaded, setLoaded] = useState(false);
  const imgOnLoad: () => void = () => setLoaded(true);
  const className = `${loaded ? 'loaded' : ''}`;

  return (
    <Style>
      {data.map((img, ind) =>
        <span key={ind}>
          <LazyLoad
            debounce={false}
            offsetVertical={300}
          >
            <img src={img.src} title={img.title} onLoad={imgOnLoad}  className={className}/>
          </LazyLoad>
        </span>
      )}
    </Style>
  );
}


export default ImageList;
