import React, { useState } from 'react';
// REDUX, ACTION
import { useSelector } from 'react-redux';
// ANIMATION & IMAGES
import styled from 'styled-components';
import { motion } from 'framer-motion';
// COMPONENT
import Photo from './Photo';

const PhotosGallery = () => {
  const sofiaPhotos = useSelector((state) => state.sofia);
  const vladPhotos = useSelector((state) => state.vladivostok);
  const asiaPhotos = useSelector((state) => state.asia);
  const beijingPhotos = useSelector((state) => state.beijing);
  const bucharestPhotos = useSelector((state) => state.bucharest);

  const [imgFilter, setImgFilter] = useState([]);

  const imgFilterClickEvent = (f, id) => {
    if (imgFilter.includes(f)) {
      const array = imgFilter;
      const index = array.indexOf(f);
      if (index > -1) {
        array.splice(index, 1);
      }
      setImgFilter([...array]);
      document.getElementById(id).style.backgroundColor = 'transparent ';
    } else {
      const array = imgFilter;
      array.push(f);
      setImgFilter([...array]);
      document.getElementById(id).style.backgroundColor = '#FF83D3';
    }
  };

  return (
    <div>
      <StyledFilter>
        <button
          onClick={() => imgFilterClickEvent('sofia', 'sofia-btn')}
          id='sofia-btn'
        >
          Sofia
        </button>
        <button
          onClick={() => imgFilterClickEvent('vladivostok', 'vladivostok-btn')}
          id='vladivostok-btn'
        >
          Vladivostok
        </button>
        <button
          onClick={() => imgFilterClickEvent('asia', 'asia-btn')}
          id='asia-btn'
        >
          Asia
        </button>
        <button
          onClick={() => imgFilterClickEvent('beijing', 'beijing-btn')}
          id='beijing-btn'
        >
          Beijing
        </button>
        <button
          onClick={() => imgFilterClickEvent('bucharest', 'bucharest-btn')}
          id='bucharest-btn'
        >
          Bucharest
        </button>
      </StyledFilter>
      <StyledGallery>
        {imgFilter.length < 1 || imgFilter.includes('sofia') ? (
          <div>
            {sofiaPhotos.map((photo) => (
              <Photo
                key={photo.key}
                src={photo.photoSmall}
                alt={photo.filter}
                lrgSrc={photo.photo}
              ></Photo>
            ))}
          </div>
        ) : (
          <div></div>
        )}

        {imgFilter.length < 1 || imgFilter.includes('vladivostok') ? (
          <div>
            {vladPhotos.map((photo) => (
              <Photo
                key={photo.key}
                src={photo.photoSmall}
                alt={photo.filter}
                lrgSrc={photo.photo}
              ></Photo>
            ))}
          </div>
        ) : (
          <div></div>
        )}

        {imgFilter.length < 1 || imgFilter.includes('asia') ? (
          <div>
            {asiaPhotos.map((photo) => (
              <Photo
                key={photo.key}
                src={photo.photoSmall}
                alt={photo.filter}
                lrgSrc={photo.photo}
              ></Photo>
            ))}
          </div>
        ) : (
          <div></div>
        )}

        {imgFilter.length < 1 || imgFilter.includes('beijing') ? (
          <div>
            {beijingPhotos.map((photo) => (
              <Photo
                key={photo.key}
                src={photo.photoSmall}
                alt={photo.filter}
                lrgSrc={photo.photo}
              ></Photo>
            ))}
          </div>
        ) : (
          <div></div>
        )}

        {imgFilter.length < 1 || imgFilter.includes('bucharest') ? (
          <div>
            {bucharestPhotos.map((photo) => (
              <Photo
                key={photo.key}
                src={photo.photoSmall}
                alt={photo.filter}
                lrgSrc={photo.photo}
              ></Photo>
            ))}
          </div>
        ) : (
          <div></div>
        )}
      </StyledGallery>
    </div>
  );
};

const StyledGallery = styled(motion.div)`
  padding: 4rem 10rem;
  column-count: 4;
  column-gap: 2em;
  div {
    width: 100%;
  }
`;

const StyledFilter = styled(motion.div)`
  padding-top: 5em;
  display: flex;
  justify-content: center;
  width: 75%;
  margin: auto;
  button {
    cursor: pointer;
    font-size: 1.6rem;
    padding: 0.2em 0.6em;
    margin: 0 0.6em;
    background: none;
    border-radius: 0%;
    border: none;
    transition-duration: 200ms;
  }
`;

export default PhotosGallery;
