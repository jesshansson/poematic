import React from 'react';
import styled from 'styled-components';

export const PoemList = ({ name }) => {
  const poems = [
    <TextDiv>
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
    </TextDiv>,
    
    <TextDiv>
      <p>Roses are red,</p>
      <p>Violets are blue,</p>
      <p>{name} is awesome,</p>
      <p>And so are you!</p>
    </TextDiv>,
    
    <TextDiv>
     <p>On this day, {name}, we celebrate,</p>
     <p>A life so special, we truly appreciate.</p>
     <p>Your kindness and compassion, oh so grand,</p>
     <p>A gentle touch, a helping hand.</p>
     <p>Through ups and downs, you stay so strong,</p>
     <p>Guiding us when things go wrong.</p>
     <p>May your path be filled with love and cheer,</p>
     <p>Happy moments throughout the year.</p>
   </TextDiv>,
 
   <TextDiv>
     <p>In the realm of dreams, where fantasy flies,</p>
     <p>{name} enchants, a sight for sore eyes.</p>
     <p>A mystical aura, shining bright,</p>
     <p>A beacon of hope, a guiding light.</p>
     <p>In lands unknown, adventures unfold,</p>
     <p>With {name} beside, stories untold.</p>
     <p>A hero, a muse, forever adored,</p>
     <p>{name}'s essence, forever soared.</p>
   </TextDiv>,
 
   <TextDiv>
     <p>Through the seasons, the ebb and flow,</p>
     <p>{name} blossoms, a beauty to show.</p>
     <p>In springtime's embrace, petals unfold,</p>
     <p>A vibrant spirit, a sight to behold.</p>
     <p>Summer's warmth, like a sunlit embrace,</p>
     <p>{name}'s radiance brightens every place.</p>
     <p>In autumn's dance, colors ignite,</p>
     <p>A soul ablaze, a breathtaking sight.</p>
     <p>Winter's embrace, serene and serene,</p>
     <p>{name}'s grace and strength, forever seen.</p>
   </TextDiv>,
 
   <TextDiv>
     <p>With every word, with every rhyme,</p>
     <p>{name} paints a picture, transcending time.</p>
     <p>A poet's heart, an artist's soul,</p>
     <p>Expressing emotions, making us whole.</p>
     <p>Each verse crafted, a masterpiece,</p>
     <p>A symphony of words that will never cease.</p>
     <p>In the realm of poetry, {name} reigns supreme,</p>
     <p>A creative force, fulfilling every dream.</p>
   </TextDiv>
 ];   

  const randomIndex = Math.floor(Math.random() * poems.length);
  const selectedPoem = poems[randomIndex];

  return <>{selectedPoem}</>;
};

const TextDiv = styled.div`
font-family: 'Kalam', cursive;
font-size: 20px;
padding: 1px;

@media (max-width: 668px){ 
  font-size: 18px;
  
  }

`