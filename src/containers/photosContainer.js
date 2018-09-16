import { connect } from 'react-redux';
import Photos from '../components/photos';

const mapStateToProps = state => ({
  photos: state.photos,
  viewType: state.viewType,
});

const PhotosContainer = connect(
  mapStateToProps,
  null,
)(Photos);

export default PhotosContainer;
