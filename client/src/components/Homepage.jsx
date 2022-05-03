import React from 'react';
import { HomepageWrapper } from '../styles/Homepage.styled';

function Homepage() {
  return (
    // <div style={{ display: 'flex', justifyContent: 'center' }}>
      <HomepageWrapper>
        <header className="title">MMA Title</header>
        <div className="options">
          <span>Text 1</span>
          <span>Text 2</span>
        </div>
      </HomepageWrapper>
    // </div>
  );
}

export default Homepage;
