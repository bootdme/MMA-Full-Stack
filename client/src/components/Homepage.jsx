import React from 'react';
import { useNavigate } from 'react-router';
import { HomepageOuter, HomepageWrapper } from '../styles/Homepage.styled';

function Homepage() {
  const navigate = useNavigate();
  return (
    <HomepageOuter>
      <div className="homepage">
        <HomepageWrapper>
          <header className="title">MMA Title</header>
          <header className="options">
            <span
              onClick={() => {
                navigate('/fighter', { replace: true });
              }}
            >
              Add A Fighter
            </span>
            <span
              onClick={() => {
                navigate('/compare', { replace: true });
              }}
            >
              One-on-One
            </span>
          </header>
        </HomepageWrapper>
      </div>
    </HomepageOuter>
  );
}

export default Homepage;
