import React from 'react';
import PropTypes from 'prop-types';
import './galleryStats.css';

const GalleryStats = props => (
  <ul className="gallery-stats">
    <li className="mb-1 text-muted">{props.countTotal} items</li>
    <li className="mb-1 text-muted">{props.countViews} views</li>
    <li className="mb-1 text-muted">{props.countComments} comments</li>
  </ul>
);

GalleryStats.propTypes = {
  countTotal: PropTypes.number.isRequired,
  countViews: PropTypes.number.isRequired,
  countComments: PropTypes.number.isRequired,
};

GalleryStats.defaultProps = {
  countTotal: 0,
  countViews: 0,
  countComments: 0,
};

export default GalleryStats;
