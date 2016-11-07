export const MEDIA_SIZE_CHANGE = 'MEDIA_SIZE_CHANGE';

export function changeMediaSize(newSize) {
  return {
    type: MEDIA_SIZE_CHANGE,
    payload: newSize
  };
}
