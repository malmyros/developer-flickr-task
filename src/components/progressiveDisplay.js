import React from 'react';
import PropTypes from 'prop-types';

const ProgressiveDisplay = (props) => {
  if (!props.loading) {
    return (
      <React.Fragment>
        {props.children}
      </React.Fragment>
    );
  }

  return (
    <div className="jumbotron text-center progressive-loading">
      Loading...
    </div>
  );
};

ProgressiveDisplay.propTypes = {
  loading: PropTypes.bool.isRequired,
  children: PropTypes.any.isRequired,
};

ProgressiveDisplay.defaultProps = {
  loading: false,
};

export default ProgressiveDisplay;
