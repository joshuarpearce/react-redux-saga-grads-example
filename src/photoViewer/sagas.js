import { all, call, takeEvery, put } from 'redux-saga/effects';

import * as actions from './actions';
import * as api from './api';

export function* fetchPhotos() {
    try {
        const photos = yield call(api.fetchPhotos);
        console.log(photos.length);
        yield put(actions.fetchPhotosSuccess(photos));
    } catch (e) {
        yield put(actions.fetchPhotosError(e));
    }
}

export default function* rootSaga() {
    yield all([
        takeEvery(
            actions.FETCH_PHOTOS,
            fetchPhotos
        )
    ]);
}