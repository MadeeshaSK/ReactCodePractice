import * as React from 'react';

interface CounterProps {
    count: number;
}

const Counter: React.FC<CounterProps> = ({ count }) => {
    return (
        <div>
            <mark>Counter:{count}</mark>
        </div>
    );
}
export default Counter;