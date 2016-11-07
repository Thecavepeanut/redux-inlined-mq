import { DESKTOP, getSize } from './common';
import { MEDIA_SIZE_CHANGE } from './action';

export default (state, action) => {
  switch (action.type) {
    case MEDIA_SIZE_CHANGE: {
      //  always default to desktop, this should never happen
      return action.payload || DESKTOP;
    }
    default: return getSize();
  }
};
