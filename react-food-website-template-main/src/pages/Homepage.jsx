/**
 * @file Homepage.jsx
 * @description Homepage component including hero section and company introduction.
 */

import React from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import Slider from '../components/Slider';
import Design7 from '../assets/images/design-7.webp';

const Homepage = () => {
  return (
    <div>
      <Helmet>
        <title>Velora Bites | Premium Quality Dry Fruits</title>
        <meta
          name="description"
          content="Velora Bites is a premium food brand offering high-quality dry fruits including pistachios, cashews, almonds, walnuts, and black raisins."
        />
      </Helmet>

      {/* Hero / Intro Section */}
      <Slider />

      {/* About Section */}
      <section id="about" className="section-bg">
        <Container className="overflow-hidden text-center">
          <h2 className="cormorant-garamond">About Velora Bites</h2>
          <p>
            Velora Bites is committed to delivering premium-quality dry fruits
            sourced from trusted growers and processed with care to preserve
            freshness, taste, and nutritional value.
          </p>
          <p>
            Our product range includes pistachios, cashews, almonds, walnuts,
            black raisins, dry figs, and apricots—carefully selected to meet
            international quality standards.
          </p>
        </Container>
      </section>

      {/* Decorative Design Element */}
      <img
        src={Design7}
        alt="Decorative pattern"
        className="design-7 d-none d-sm-block"
      />
    </div>
  );
};

export default Homepage;
