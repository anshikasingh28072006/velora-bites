/**
 * @file Slider.jsx
 * @description Hero section with introductory content and CTA button.
 */

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Slider = () => {
  return (
    <section id="intro">
      <Container>
        <Row className="justify-content-md-center text-center">
          <Col md={7}>
            <h1>Premium Quality Dry Fruits</h1>
            <p>
              We at <strong>Velora Bites</strong> are wholesalers, traders, and exporters of
              high-quality assortments of pistachios, cashew nuts, almonds,
              walnuts, black raisins, dry figs, dry apricots, and more.
            </p>
            <a className="btn-primary" href="#">
              Explore Products
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Slider;