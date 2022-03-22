import React from 'react';
// ANIMATION & IMAGES
import styled from 'styled-components';
import { motion } from 'framer-motion';
import logo from '../img/ehsan-frost-logo.png';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Nav = () => {
  return (
    <StyledNav>
      <StyledSiteLinks>
        <a href='/about'>about</a>
        <a href='/contact'>contact</a>
      </StyledSiteLinks>
      <StyledSocialLinks>
        <ul>
          <li>
            <a href='#'>
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href='#'>
              <FaFacebook />
            </a>
          </li>
        </ul>
      </StyledSocialLinks>
      <StyledLogo>
        <a href='/'>
          <img src={logo} alt='Ehsan Frost logo' />
        </a>
      </StyledLogo>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  background-color: #1d1d1d;
  padding: 3rem 10rem;
`;

const StyledSiteLinks = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  font-size: 2rem;
`;

const StyledSocialLinks = styled(motion.div)`
  display: flex;
  justify-content: flex-end;
  ul {
    list-style: none;
    margin-top: 0.5rem;
  }
  li {
    padding: 0.2rem 0;
  }
  a {
    font-size: 2rem;
    line-height: 0;
    display: inline-block;
  }
`;

const StyledLogo = styled(motion.div)`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
  min-width: 250px;
  max-width: 450px;
  cursor: pointer;
  img {
    width: 100%;
  }
`;

export default Nav;
