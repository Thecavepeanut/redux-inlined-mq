/* global window */
import { assign } from 'lodash';

export const SIZE_CHECK = {
  S: 392,
  M: 456,
  L: 768,
  T: 1440
};

export const SMALL_MOBILE = 'S';
export const MED_MOBILE = 'M';
export const LARGE_MOBILE = 'L';
export const TABLET = 'T';
export const DESKTOP = 'D';

export function getStyle(style, size) {
  switch (size) {
    case SMALL_MOBILE: return assign(style.D, style.T, style.L, style.M, style.S);
    case MED_MOBILE: return assign(style.D, style.T, style.L, style.M);
    case LARGE_MOBILE: return assign(style.D, style.T, style.L);
    case TABLET: return assign(style.D, style.T);
    case DESKTOP: return assign(style.D);
    default: return {};
  }
}

export function getSize() {
  const width = (window.innerWidth || window.innerWidth === 0) ?
    window.innerWidth : window.clientWidth;
  if (width <= SIZE_CHECK.S) return SMALL_MOBILE;
  else if (width <= SIZE_CHECK.M) return MED_MOBILE;
  else if (width <= SIZE_CHECK.L) return LARGE_MOBILE;
  else if (width <= SIZE_CHECK.T) return TABLET;
  return DESKTOP;
}
