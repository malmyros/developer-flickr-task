import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import _ from 'lodash';
import api from '../api';

import ChangeViewTypeContainer from '../containers/changeViewTypeContainer';
import PhotosContainer from '../containers/photosContainer';
import GalleryStats from './galleryStats';

class PhotoStream extends Component {
  componentDidMount() {
    this.props.onLoadPhotosRequest();
    axios
      .get(api.getPhotos)
      .then((response) => {
        if (_.has(response, 'data.photos.photo')) {
          this.props.onLoadPhotosSuccess(response.data.photos.photo);
        }

        if (_.has(response, 'data.gallery')) {
          const galleryResponse = response.data.gallery;
          const gallery = {
            title: galleryResponse.title._content,
            description: galleryResponse.description._content,
            count_total: galleryResponse.count_total,
            count_views: galleryResponse.count_views,
            count_comments: galleryResponse.count_comments,
          };

          this.props.onUpdateGallery(gallery);
        }
      })
      .catch((error) => {
        this.props.onLoadPhotosFailure(error);
      });
  }

  render() {
    const {
      title, description, countTotal, countViews, countComments,
    } = this.props;
    return (
      <section className="album py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="bd-title">{title}</h1>
              <p>{description}</p>
              <GalleryStats countTotal={countTotal}
                            countViews={countViews}
                            countComments={countComments}/>
            </div>
          </div>
          <hr/>
          <ChangeViewTypeContainer/>
          <PhotosContainer/>
        </div>
      </section>
    );
  }
}

PhotoStream.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  countTotal: PropTypes.number.isRequired,
  countViews: PropTypes.number.isRequired,
  countComments: PropTypes.number.isRequired,
  onLoadPhotosRequest: PropTypes.func.isRequired,
  onLoadPhotosSuccess: PropTypes.func.isRequired,
  onLoadPhotosFailure: PropTypes.func.isRequired,
  onUpdateGallery: PropTypes.func.isRequired,
};

PhotoStream.defaultProps = {
  title: '',
  description: '',
  countTotal: 0,
  countViews: 0,
  countComments: 0,
};

export default PhotoStream;
