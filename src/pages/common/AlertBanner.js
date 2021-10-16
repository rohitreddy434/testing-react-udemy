import Alert from 'react-bootstrap/Alert';

import React from 'react';
import PropTypes from 'prop-types';

function AlertBanner({ message, variant }) {
  const alertMessage = message || 'An unexpected error occurred. Please try again later.';
  const alertVariant = variant || 'danger';
  return (
    <Alert variant={alertVariant} style={{ bankgroundColor: 'red' }}>
      {alertMessage}
    </Alert>
  );
}

AlertBanner.propTypes = {};

export default AlertBanner;
