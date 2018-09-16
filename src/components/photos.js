import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Photo from './photo';

const Photos = (props) => {
  let { photos } = props;
  if (_.isNil(photos) || photos.length === 0) {
    return null;
  }

  photos = photos.map(photo => (
    <Photo key={`photo_id_${photo.id}`}
           viewType={props.viewType}
           {...photo}/>
  ));

  return (
    <div className="row">
      {photos}
    </div>
  );
};

Photos.propTypes = {
  viewType: PropTypes.string.isRequired,
  photos: PropTypes.array.isRequired,
};

Photos.defaultProps = {
  photos: [],
};

export default Photos;
