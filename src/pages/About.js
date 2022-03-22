import React from 'react';
// ANIMATION & IMAGES
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ehsanRight from '../img/ehsan/04-ehsan-large.jpg';
import ehsanLeft from '../img/ehsan/06-ehsan-large.jpg';
import ehsanBanner from '../img/ehsan/05-ehsan-large.jpg';

const About = () => {
  return (
    <div>
      <StyledBannerImg src={ehsanBanner} alt='' />
      <StyledBioDiv>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
          perspiciatis esse tempore quos nam cupiditate vero accusantium sequi
          enim saepe, numquam, fugit quaerat iste praesentium, magni recusandae!
          Cupiditate praesentium qui sapiente iure tenetur quisquam, deleniti,
          rem facere illum a in quaerat minima laboriosam officiis officia vero
          sint, ratione distinctio ex.
        </p>
        <div>
          <img src={ehsanLeft} alt='' /> <img src={ehsanRight} alt='' />
        </div>
      </StyledBioDiv>
    </div>
  );
};

const StyledBannerImg = styled(motion.img)`
  height: 250px;
  width: 100vw;
  object-fit: cover;
`;

const StyledBioDiv = styled(motion.div)`
  padding: 80px 0px;
  width: 70%;
  margin: auto;
  p {
    font-size: 2rem;
  }
  div {
    margin-top: 80px;
    display: flex;
    justify-content: space-between;
    img {
      max-width: 400px;
    }
  }
`;

export default About;
