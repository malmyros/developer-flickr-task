/* eslint-disable no-underscore-dangle,no-undef */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import renderHTML from 'react-render-html';
import api from '../api';
import { THUMBNAIL } from '../model/viewType';
import Tags from './tags';
import { baseUrl } from '../properties';

class Photo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      currentImage: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22348%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20348%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_165e1d92529%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A17pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_165e1d92529%22%3E%3Crect%20width%3D%22348%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22116.71875%22%20y%3D%22120.15%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
      description: '',
      owner: '',
      tags: [],
    };
  }

  componentDidMount() {
    this.onFetchImage(this.onGetImageUrl());
    axios
      .get(api.getPhoto(api.getPhoto(this.props.id)))
      .then((response) => {
        const photoResponse = response.data.photo;
        this.setState({
          description: photoResponse.description._content,
          owner: photoResponse.owner,
          tags: photoResponse.tags.tag,
        });
      });
  }

  onGetImageUrl() {
    const {
      id, farm, server, secret,
    } = this.props;
    return `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;
  }

  onFetchImage(imageUrl) {
    const image = new Image();
    image.onload = () => this.setState({
      currentImage: this.loadingImage.src,
      loading: false,
    });

    image.src = imageUrl;
    this.loadingImage = image;
  }

  render() {
    const {
      id, title, viewType,
    } = this.props;

    const {
      loading, currentImage,
      description, owner, tags,
    } = this.state;

    const isThumbnail = viewType === THUMBNAIL;

    const imageStyle = {
      height: isThumbnail ? '225px' : '100%',
      width: '100%',
      display: 'block',
      transition: '0.5s filter linear',
      filter: `${loading ? 'blur(25px)' : ''}`,
    };

    const columnSize = isThumbnail
      ? 'col-md-4'
      : 'col-12';

    const ownerUrl = `${baseUrl}/photos/${owner.nsid}/`;
    const photoUrl = `${ownerUrl}${id}`;

    return (
      <div className={columnSize}>
        <div className="card mb-4 shadow-sm">
          <img className="card-img-top"
               id={id}
               style={imageStyle}
               alt={title}
               src={currentImage}/>
          <div className="card-body">
            <div>
              <a href={photoUrl} title={title} target="_blank" rel="noopener noreferrer">{title}
              </a> by <a href={ownerUrl} title={owner.username} target="_blank" rel="noopener noreferrer">{owner.username}</a>
            </div>
            <p className="card-text">{renderHTML(description)}</p>
            <div className="d-flex justify-content-between align-items-center">
              <small className="text-muted">
                <Tags tags={tags}/>
              </small>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Photo.propTypes = {
  id: PropTypes.string.isRequired,
  farm: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  viewType: PropTypes.string.isRequired,
  server: PropTypes.any,
  secret: PropTypes.any,
};

Photo.defaultProps = {
  farm: 0,
  id: '',
  title: '',
  description: '',
  author: '',
  viewType: THUMBNAIL,
};

export default Photo;
