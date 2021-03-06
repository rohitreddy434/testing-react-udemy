import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';

function ScoopOption({ name, imagePath }) {
  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: 'center' }}>
      <img width='75%' src={`http://localhost:3030/${imagePath}`} alt={`${name} scoop`} />
    </Col>
  );
}

ScoopOption.propTypes = {};

export default ScoopOption;
