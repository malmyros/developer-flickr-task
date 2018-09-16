import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Tag from './tag';

const Tags = (props) => {
  let { tags } = props;
  if (_.isNil(tags) || tags.length === 0) {
    return null;
  }

  tags = !_.isNil(tags)
    ? tags.map(tag => (<Tag key={'tag_id_tag.id'} title={tag._content}/>))
    : null;

  return (
    <React.Fragment>
      Tags: {tags}
    </React.Fragment>
  );
};

Tags.propTypes = {
  tags: PropTypes.array.isRequired,
};

Tags.defaultProps = {
  tags: [],
};

export default Tags;
