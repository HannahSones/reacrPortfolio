import React, { useEffect } from 'react';
import '../style.css';
import './portfolio.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Portfolio() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return (
    <h1>This will be the portfolio page</h1>
  )
}

export default Portfolio;