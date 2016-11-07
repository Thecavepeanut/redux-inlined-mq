import { connect } from 'react-redux';
import Component from './component';
import { changeMediaSize } from './action';

export default connect(
  state => state,
  dispatch => (
    {
      onMediaSizeChange: newSize => dispatch(changeMediaSize(newSize))
    }),
)(Component);
