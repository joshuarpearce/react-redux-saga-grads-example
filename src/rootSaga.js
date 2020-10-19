import { all, spawn } from 'redux-saga/effects';

import { saga as photoViewer } from './photoViewer';

export default function* rootSaga() {
    yield all([
        spawn(photoViewer)
    ]);
}