import { connect } from 'react-redux';
import {
  loadingPhotosFailure, loadingPhotosRequest, loadingPhotosSuccess, updateGallery,
} from '../actions';
import PhotoStream from '../components/photoStream';

const mapStateToProps = state => ({
  loading: state.loading,
  title: state.gallery.title,
  description: state.gallery.description,
  countTotal: state.gallery.count_total,
  countViews: state.gallery.count_views,
  countComments: state.gallery.count_comments,
});

const mapDispatchToProps = dispatch => ({
  onLoadPhotosRequest: () => dispatch(loadingPhotosRequest()),
  onLoadPhotosSuccess: photos => dispatch(loadingPhotosSuccess(photos)),
  onLoadPhotosFailure: error => dispatch(loadingPhotosFailure(error)),
  onUpdateGallery: gallery => dispatch(updateGallery(gallery)),
});

const PhotoStreamContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PhotoStream);

export default PhotoStreamContainer;
