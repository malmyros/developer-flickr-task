import React from 'react';
import PropTypes from 'prop-types';

const Tag = props => (
  <span className="btn btn-outline-secondary disabled mr-2 mb-2">
    {props.title}
  </span>
);

Tag.propTypes = {
  title: PropTypes.string.isRequired,
};

Tag.defaultProps = {
  title: '',
};

export default Tag;
