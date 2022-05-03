import React from 'react';
import { HomepageOuter, HomepageWrapper } from '../styles/Homepage.styled';

function Homepage() {
  return (
    <HomepageOuter>
      <div className="homepage">
        <HomepageWrapper>
          <header className="title">MMA Title</header>
          <header className="options">
            <span>Add A Fighter</span>
            <span>One-on-One</span>
          </header>
        </HomepageWrapper>
      </div>
    </HomepageOuter>
  );
}

export default Homepage;
