import React, { useEffect } from 'react';

export default (props) => {
    useEffect(
        () => { if (!props.fetching && !props.fetchingError && !props.photos) props.fetchPhotos(); },
        [props.fetching, props.fetchingError, props.photos, props.fetchPhotos, props]
    );

    if (props.fetchingError) return JSON.stringify(props.fetchingError);
    if (props.fetching) return 'Loading...';
    if (!props.photos) return 'No photos';

    return (
        <div>
            Photos: testvalue is { props.testVal}
            <button onClick={props.previous}>Prev</button>
            <img src={props.photos[props.index].url} alt={props.photos[props.index].title} />
            { props.index}
            <button onClick={props.next}>Next</button>
        </div>
    );
};