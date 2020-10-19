export const getRoot = state => state.photoViewer;

export const getTestValue = state => getRoot(state).test;

export const index = state => getRoot(state).index;

export const photos = state => getRoot(state).photos;