import React, { useState } from 'react';
import styled from 'styled-components';

export const Poem = () => {
  const [name, setName] = useState('');
  const [showPoem, setShowPoem] = useState(false);

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    setShowPoem(true);
  };

  const generatePoem = () => {
    return (
      <div>
        <p>Oh {name}, you shine so bright,</p>
        <p>A source of warmth and pure delight.</p>
        <p>Your laughter dances in the air,</p>
        <p>A melody beyond compare.</p>
        <p>The world lights up when you appear,</p>
        <p>With love and joy that's crystal clear.</p>
        <p>In every step, a graceful glide,</p>
        <p>Your presence fills our hearts with pride.</p>
        <p>Oh {name}, a star in the night,</p>
        <p>Your spirit takes us to new heights.</p>
      </div>
    );
  };

  return (
    <Body>
      <Title>Poematic</Title>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Enter your name"
        />
        <Button type="submit">Enter</Button>
      </form>
      {showPoem && generatePoem()}
    </Body>
  );
};

const Title = styled.h1`
font-size: 40px;
font-family: 'Caveat', cursive;
`

const Body = styled.div`
text-align:center;
margin-top: 40px;
`

const Button = styled.button`
margin: 0px 10px`