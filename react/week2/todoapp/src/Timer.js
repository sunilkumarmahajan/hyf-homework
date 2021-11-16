import React, { useState, useEffect } from 'react'

function Timer() {
    const [time, setTime] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(prev => prev + 1)
        }, 1000)
        return () => setInterval(timer)
    });

    return (
        <h3>You Have Used {time} Seconds On this website</h3>
    )

}
export default Timer;
