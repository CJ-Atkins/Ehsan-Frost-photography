import React, { useState } from 'react';
// ANIMATION & IMAGES
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Contact = () => {
  const [status, setStatus] = useState('send');
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending...');
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch('http://localhost:5000/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(details),
    });
    setStatus('send');
    let result = await response.json();
    alert(result.status);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledNameEmailDiv>
        <StyledInputDiv>
          <label htmlFor='name'>name</label>
          <input type='text' id='name' required />
        </StyledInputDiv>
        <StyledDivider></StyledDivider>
        <StyledInputDiv>
          <label htmlFor='email'>email</label>
          <input type='email' id='email' required />
        </StyledInputDiv>
      </StyledNameEmailDiv>
      <StyledInputDiv>
        <label htmlFor='message'>message</label>
        <textarea id='message' required />
      </StyledInputDiv>
      <StyledButtonDiv>
        <button type='submit'>{status}</button>
      </StyledButtonDiv>
    </StyledForm>
  );
};

const StyledForm = styled(motion.form)`
  width: 75%;
  margin: auto;
  padding-top: 50px;
  font-size: 1.8rem;
  label {
    margin-bottom: 0.3em;
  }
  input {
    height: 2em;
    font-size: 1.8rem;
    border-radius: 0;
    border: none;
    box-shadow: 5px 5px #747474;
    outline: none;
    padding: 0.5em;
  }
  textarea {
    font-size: 1.8rem;
    border-radius: 0;
    border: none;
    resize: none;
    box-shadow: 5px 5px #747474;
    outline: none;
    padding: 0.5em;
    height: 8em;
  }
  button {
    margin: auto;
  }
  @media screen and (max-width: 1000px) {
    padding-top: 40px;
    font-size: 1.6rem;
    width: 90%;
    input {
      font-size: 1.4rem;
      box-shadow: 4px 4px #747474;
    }
    textarea {
      font-size: 1.4rem;
      box-shadow: 4px 4px #747474;
    }
  }
  @media screen and (max-width: 600px) {
    padding-top: 20px;
    width: 95%;
    font-size: 1.4rem;
    input {
      font-size: 1.2rem;
      box-shadow: 3px 3px #747474;
    }
    textarea {
      font-size: 1.2rem;
      box-shadow: 3px 3px #747474;
    }
  }
`;

const StyledNameEmailDiv = styled(motion.form)`
  margin: auto;
  display: flex;
  margin-bottom: 1.5em;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    margin-bottom: 0;
  }
`;

const StyledInputDiv = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 600px) {
    margin-bottom: 1.5em;
  }
`;

const StyledDivider = styled(motion.form)`
  width: 8em;
`;

const StyledButtonDiv = styled(motion.div)`
  margin-top: 2em;
  display: flexbox;
  justify-content: center;
  button {
    cursor: pointer;
    padding: 0.5em 1.2em;
    font-size: 2rem;
    border: none;
    border-radius: 0%;
    box-shadow: 5px 5px #747474;
    background-color: #00c9ff;
  }

  @media screen and (max-width: 1000px) {
    button {
      font-size: 1.8rem;
      box-shadow: 4px 4px #747474;
    }
  }
  @media screen and (max-width: 600px) {
    button {
      font-size: 1.6rem;
      box-shadow: 3px 3px #747474;
    }
  }
`;

export default Contact;
