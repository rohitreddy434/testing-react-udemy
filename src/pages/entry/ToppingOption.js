import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';

function ToppingOption({ name, imagePath }) {
  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: 'center' }}>
      <img width='75%' src={`http://localhost:3030/${imagePath}`} alt={`${name} topping`} />
    </Col>
  );
}

ToppingOption.propTypes = {};

export default ToppingOption;
