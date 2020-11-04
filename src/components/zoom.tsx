import React from 'react';
import { useState } from 'react';

function Zoom() {
    const [persen, setPersen] = useState(50)
    return (
        <div className="zoom shadow-sm">
            <div className="d-flex justify-content-center align-items-center">
                <button className="btn" onClick={() => setPersen(persen - 10)}>
                    <i className="fas fa-search-minus"></i></button>
                <div className="pointer hover:bg-gray-200 rounded px-2 py-1 fw-500">{persen}%</div>
                <button className="btn" onClick={() => setPersen(persen + 10)}>
                    <i className="fas fa-search-plus"></i></button>
            </div>
        </div>
    )
}
export default Zoom