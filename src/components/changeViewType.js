import React from 'react';
import PropTypes from 'prop-types';
import { LARGE, THUMBNAIL } from '../model/viewType';
import './changeViewType.css';

const ChangeViewType = (props) => {
  const { viewType, onChangeViewType } = props;
  const thumbnailLinkCssClass = viewType === THUMBNAIL ? 'active' : '';
  const largeLinkCssClass = viewType === LARGE ? 'active' : '';

  return (
    <div className="change-view-type-config">
      <ul className="view-types">
        <li>
          <a className={thumbnailLinkCssClass}
             role="button"
             title="Thumbnail view"
             onClick={() => onChangeViewType(THUMBNAIL)}>
            <i className="fas fa-th-large"/>
          </a>
        </li>
        <li>
          <a className={largeLinkCssClass}
             role="button"
             title="Large view"
             onClick={() => onChangeViewType(LARGE)}>
            <i className="fas fa-stop"/>
        </a>
        </li>
      </ul>
    </div>);
};

ChangeViewType.propTypes = {
  viewType: PropTypes.string.isRequired,
  onChangeViewType: PropTypes.func.isRequired,
};

ChangeViewType.defaultProps = {
  viewType: THUMBNAIL,
};

export default ChangeViewType;
