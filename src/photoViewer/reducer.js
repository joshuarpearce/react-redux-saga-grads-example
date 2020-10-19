import * as actions from './actions';

const INITIAL_STATE = {
    test: 'TEST',
    index: null,
    photos: null,
    fetching: false,
    fetchingError: null
};

export default (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case actions.PREVIOUS:
            return {
                ...state,
                index: state.index === 0 ? state.photos.length - 1 : state.index - 1
            };
        case actions.NEXT:
            return {
                ...state,
                index: state.index === state.photos.length - 1 ? 0 : state.index + 1
            };
        case actions.FETCH_PHOTOS:
            return {
                ...state,
                fetching: true,
                photos: null,
                index: null,
                fetchingError: null
            };
        case actions.FETCH_PHOTOS_SUCCESS:
            return {
                ...state,
                photos: action.photos,
                fetching: false,
                index: 0
            };
        case actions.FETCH_PHOTOS_ERROR:
            return {
                ...state,
                fetching: false,
                fetchingError: action.message
            };
        default:
            return state;
    }
}