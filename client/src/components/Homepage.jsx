import React from 'react';
import { HomepageWrapper } from '../styles/Homepage.styled';

function Homepage() {
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
    <HomepageWrapper>
      <header className="Title">MMA Title</header>
      <div style={{display: 'flex'}}>
        <span>Text 1</span><span>Text 2</span>
      </div>
    </HomepageWrapper>
    </div>
  );
}

export default Homepage;
