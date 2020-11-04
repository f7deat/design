import React from "react"

function NewDesign(props: any) {
    return (
        <div className={props.showNewDesign ? "" : "d-none"}>
            <div style={{ backgroundColor: 'rgba(18,19,22,.64)', zIndex: 1 }} className="h-screen w-screen position-fixed top-0">
                <div className="rounded bg-white p-4 shadow" style={{ width: 790, height: 560, position: 'fixed', top: '20%', left: '30%' }}>
                    <div className="position-relative">
                        <div className="mb-4">
                            <button onClick={() => props.setShowNewDesign(!props.showNewDesign)} className="btn text-muted float-right"><i className="fas fa-times"></i></button>
                            <h5 className="text-center"> Choose Format and Start Design</h5>
                        </div>
                        <div className="d-flex justify-content-center">
                            <div className="p-2 text-muted pointer">
                                Popular Formats
                            </div>
                            <div className="p-2 pointer">
                                Custom Size
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewDesign