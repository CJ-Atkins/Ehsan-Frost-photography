import React, { useState } from 'react';
// ANIMATION & IMAGES
import styled from 'styled-components';
import { motion } from 'framer-motion';
// COMPONENT
import FullPhoto from './FullPhoto';

const Photo = (props) => {
  const [showHide, setShowHide] = useState(false);

  const showLrgPhoto = () => {
    setShowHide(true);
    document.body.style.overflow = 'hidden';
  };

  return (
    <StyledPhotoDiv>
      <img
        src={props.src}
        className={props.alt}
        alt={props.alt}
        onClick={() => showLrgPhoto()}
      />

      {showHide === true && (
        <FullPhoto
          setShowHide={setShowHide}
          lrgSrc={props.lrgSrc}
          alot={props.alt}
        />
      )}
    </StyledPhotoDiv>
  );
};

const StyledPhotoDiv = styled(motion.div)`
  img {
    width: 100%;
    cursor: pointer;
    margin-bottom: 2em;
  }
`;

export default Photo;
