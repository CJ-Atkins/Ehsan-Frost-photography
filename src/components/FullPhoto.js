import React from 'react';
// ANIMATION & IMAGES
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FullPhoto = (props) => {
  const hideLrgPhoto = () => {
    props.setShowHide(false);
    document.body.style.overflow = 'auto';
  };
  return (
    <StyledLrgPhotoDiv onClick={() => hideLrgPhoto()}>
      <img src={props.lrgSrc} alt={props.alt} />
    </StyledLrgPhotoDiv>
  );
};

const StyledLrgPhotoDiv = styled(motion.div)`
  position: fixed;
  height: 100.1vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #000000e0;
  img {
    object-fit: contain;
    height: 100%;
  }
`;

export default FullPhoto;
