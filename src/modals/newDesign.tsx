import React, { useEffect, useState } from "react"
import { connect } from "react-redux";

const mapStateToProps = (state: any) => ({
    width: state.canvasReducer.width,
    height: state.canvasReducer.height
})

function NewDesign(props: any) {
    
    const [imgWidth, setWidth] = useState(props.width);
    const [imgHeight, setHeight] = useState(props.height);
    const [previewImage, setPreviewImage] = useState(`https://placehold.jp/${imgWidth}x${imgHeight}.png`);
    
    useEffect(() => {
        setPreviewImage(`https://placehold.jp/003366/c3d7eb/${imgWidth}x${imgHeight}.png`)
    }, [imgHeight, imgWidth, setPreviewImage])

    return (
        <div className={props.showNewDesign ? "" : "d-none"}>
            <div style={{ backgroundColor: 'rgba(18,19,22,.64)', zIndex: 1 }} className="h-screen w-screen position-fixed top-0">
                <div className="rounded bg-white p-4 shadow" style={{ width: 790, height: 560, position: 'fixed', top: '20%', left: '30%' }}>
                    <div className="position-relative">
                        <div className="mb-4">
                            <button onClick={() => props.setShowNewDesign(!props.showNewDesign)} className="btn text-muted float-right"><i className="fas fa-times"></i></button>
                            <h5 className="text-center"> Choose Format and Start Design</h5>
                        </div>
                        <div className="d-flex justify-content-center mb-4">
                            <div className="py-2 px-4 text-muted cursor-pointer">
                                Popular Formats
                            </div>
                            <div className="py-2 px-4 cursor-default border-bottom border-primary">
                                Custom Size
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-center">
                            <div style={{ maxHeight: 250, maxWidth: 250 }}>
                                <img className="img-thumbnail" src={previewImage} alt="tandc" />
                            </div>
                        </div>
                        <div className="mt-4 d-flex mx-4 px-4 align-items-center">
                                <input type="number" className="form-control mr-3" onChange={(e) => setWidth(e.currentTarget.value)}/>
                                <i className="fas fa-unlock mr-3 text-gray-400"></i>
                                <input type="number" className="form-control mr-3" onChange={(e) => setHeight(e.currentTarget.value)}/>
                                <select className="form-control">
                                    <option>px</option>
                                    <option>cm</option>
                                    <option>in</option>
                                </select>
                        </div>
                        <div className="mt-3 mx-4 px-4">
                            <button className="btn btn-block btn-primary" type="button">Create Design</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect(mapStateToProps)(NewDesign)