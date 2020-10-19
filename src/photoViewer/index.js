import { connect } from 'react-redux';

import View from './View';

import * as selectors from './selectors';
import * as actions from './actions';

export const mapStateToProps = (state) => ({
    testVal: selectors.getTestValue(state),
    index: selectors.index(state),
    photos: selectors.photos(state)
});
export const mapDispatchToProps = (dispatch) => ({
    previous: () => dispatch(actions.previous()),
    next: () => dispatch(actions.next()),
    fetchPhotos: () => dispatch(actions.fetchPhotos())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(View);

export { default as reducer } from './reducer';
export { default as saga } from './sagas';