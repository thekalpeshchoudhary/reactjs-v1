import React, { useState } from 'react';

function Count(){
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1 className="font-bold bg-green-100">
                {count}
            </h1>
            <button className="font-semibold btn text-red-500" onClick={() => setCount(count + 1)}>
                Add Beaches
            </button>
            <button className="font-semibold btn text-blue-500" onClick={() => setCount(count - 1)}>
                Sub Beaches
            </button>
        </div>
    )
}

export default Count;
