import React from "react"

function Tool() {
    return (
        <div className="p-2 bg-white w-100 shadow-sm d-flex" style={{marginTop: 1}}>
            <div className="pointer py-1 px-2 rounded hover:bg-gray-200 mr-1">
                <i className="fas fa-ban"></i>
            </div>
            <div className="pointer py-1 px-2 rounded hover:bg-gray-200 mr-1">
                <i className="fas fa-border-style"></i>
            </div>
            <div className="pointer py-1 px-2 rounded hover:bg-gray-200 mr-1 font-weight-bold">
                Animate
            </div>
        </div>
    )
}

export default Tool