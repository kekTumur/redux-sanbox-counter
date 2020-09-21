import React from 'react'

const Counter = ({ counter, inc, dec, rnd}) => {
    return (
        <div className="jumbotron">
            <h2>{counter}</h2>
            <button onClick={dec} className="btn btn-primary btn-lg">-</button>
            <button onClick={inc} className="btn btn-primary btn-lg">+</button>
            <button onClick={rnd} className="btn btn-primary btn-lg">rnd</button>
        </div>
    );
}

export default Counter;