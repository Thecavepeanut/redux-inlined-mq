/* global window c*/
import React, { Component, PropTypes } from 'react';
import { getSize } from './common';

const RESIZE_BOUNCE_MS = 150;

class MQInliner extends Component {

  constructor(props) {
    super(props);
    // NOTE(JG) bidning resize bounce here so I can remove the listener later
    this.resizeBouncer = this._resizeBouncer.bind(this);
  }

  render() {
    return (<span />);
  }

  _resizeBouncer() {
    const winSize = this.props.winSize;

    if (this.resizeTO) {
      clearTimeout(this.resizeTO);
      this.resizeTO = null;
    }

    this.resizeTO = setTimeout(() => {
      const newSize = getSize();
      if (newSize !== winSize) {
        this.props.onMediaSizeChange(newSize);
      }
    }, RESIZE_BOUNCE_MS);
  }

  componentDidMount() {
    window.addEventListener('resize', this.resizeBouncer);
    window.addEventListener('orientationchange', this.resizeBouncer);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeBouncer);
    window.removeEventListener('orientationchange', this.resizeBouncer);
  }

}

MQInliner.propTypes = {
  winSize: PropTypes.string,
  onMediaSizeChange: PropTypes.func
};

export default MQInliner;
