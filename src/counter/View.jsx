import React, { useCallback, useState } from 'react';

const CounterView = () => {
    const [value, setValue] = useState(0);

    const decrement = useCallback(
        () => setValue(value - 1),
        [setValue, value]
    );
    const increment = useCallback(
        () => setValue(value + 1),
        [setValue, value]
    );

    return (
        <div>
            <button onClick={decrement}>-</button>{value}<button onClick={increment}>+</button>
        </div>
    );
};

export default CounterView;
