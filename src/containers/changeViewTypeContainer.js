import { connect } from 'react-redux';
import { changeViewType } from '../actions';
import ChangeViewType from '../components/changeViewType';

const mapStateToProps = state => ({
  viewType: state.viewType,
});

const mapDispatchToProps = dispatch => ({
  onChangeViewType: viewType => dispatch(changeViewType(viewType)),
});

const ChangeViewTypeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChangeViewType);

export default ChangeViewTypeContainer;
