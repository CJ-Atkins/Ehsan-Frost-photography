import React from 'react';
// ANIMATION & IMAGES
import styled from 'styled-components';
import { motion } from 'framer-motion';
import logo from '../img/ehsan-frost-logo.png';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <StyledNav>
      <StyledSiteLinks>
        <Link id='about' to='/about'>
          about
        </Link>
        <Link id='contact' to='/contact'>
          contact
        </Link>
      </StyledSiteLinks>
      <StyledSocialLinks>
        <ul>
          <li>
            <Link
              id='insta'
              to={{ pathname: 'https://instagram.com' }}
              target='_blank'
            >
              <FaInstagram />
            </Link>
          </li>
          <li>
            <Link
              id='facebook'
              to={{ pathname: 'https://facebook.com' }}
              target='_blank'
            >
              <FaFacebook />
            </Link>
          </li>
        </ul>
      </StyledSocialLinks>
      <StyledLogo>
        <Link id='home' to='/'>
          <img src={logo} alt='Ehsan Frost logo' />
        </Link>
      </StyledLogo>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  background-color: #1d1d1d;
  padding: 3rem 10rem;

  @media screen and (max-width: 1000px) {
    padding: 2rem 4rem;
  }
  @media screen and (max-width: 550px) {
    padding: 2rem;
  }
`;

const StyledSiteLinks = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  font-size: 2rem;

  @media screen and (max-width: 800px) {
    font-size: 1.2rem;
  }
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

  @media screen and (max-width: 600px) {
    a {
      font-size: 1.4rem;
    }

    ul {
      display: flex;
      flex-direction: row;
    }
    li {
      margin-left: 1rem;
    }
  }
`;

const StyledLogo = styled(motion.div)`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
  min-width: 150px;
  max-width: 450px;
  cursor: pointer;
  img {
    width: 100%;
  }
  @media screen and (max-width: 1000px) {
    top: 1rem;
  }
`;

export default Nav;
