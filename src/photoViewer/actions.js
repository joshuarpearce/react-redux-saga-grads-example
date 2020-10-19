export const pre = 'PHOTO_VIEWER';

export const PREVIOUS = `${pre}/PREVIOUS`;
export const previous = () => ({
    type: PREVIOUS
});

export const NEXT = `${pre}/NEXT`;
export const next = () => ({
    type: NEXT
});

export const FETCH_PHOTOS = `${pre}/FETCH_PHOTOS`;
export const fetchPhotos = () => ({
    type: FETCH_PHOTOS
});

export const FETCH_PHOTOS_SUCCESS = `${pre}/FETCH_PHOTOS_SUCCESS`;
export const fetchPhotosSuccess = (photos) => ({
    type: FETCH_PHOTOS_SUCCESS,
    photos
});

export const FETCH_PHOTOS_ERROR = `${pre}/FETCH_PHOTOS_ERROR`;
export const fetchPhotosError = (message) => ({
    type: FETCH_PHOTOS_ERROR,
    message
});