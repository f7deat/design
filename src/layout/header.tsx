import React from 'react'
import { useState } from 'react'
import NewDesign from '../modals/newDesign'

function Header() {

    const [editable, setEditable] = useState(true)
    const [showNewDesign, setShowNewDesign] = useState(false)

    return (
        <div>
            <div className="shadow-sm bg-white p-2 d-flex justify-content-between align-items-center">
                <div className="d-flex">
                    <div className="py-1 px-3 font-weight-bold text-primary">
                        crello
                </div>
                    <div onClick={() => setShowNewDesign(!showNewDesign)} className="py-1 px-3 text-dark hover:bg-gray-200 pointer rounded" style={{ fontWeight: 500, fontSize: '0.875rem' }}>
                        New design
                </div>
                    <div className="py-1 px-3 text-dark hover:bg-gray-200 pointer rounded" style={{ fontWeight: 500, fontSize: '0.875rem' }}>
                        New project
                    </div>
                    <div className="py-1 px-3 text-dark hover:bg-gray-200 pointer rounded" style={{ fontWeight: 500, fontSize: '0.875rem' }}>
                        <i className="fas fa-reply pointer"></i>
                    </div>
                    <div className="py-1 px-3 text-dark hover:bg-gray-200 pointer rounded" style={{ fontWeight: 500, fontSize: '0.875rem' }}>
                        <i className="fas fa-share pointer"></i>
                    </div>
                </div>
                <div className="d-flex align-items-center">
                    <input onDoubleClick={() => setEditable(false)} disabled={editable} type="text" className="hover:bg-gray-200 py-1 px-2 rounded" value="Instagram Post 1080x1080 px" style={{ outline: 'none', border: 'none', minWidth: '200px' }} />
                    <i className="fas fa-cloud-upload-alt text-success ml-2 p-2 rounded hover:bg-gray-200 pointer pointer"></i>
                </div>
                <div className="d-flex align-items-center">
                    <div className="px-2 py-1 mr-2 rounded pointer hover:bg-gray-200">
                        <i className="fas fa-share-alt"></i>
                    </div>
                    <div className="px-2 py-1 mr-3 rounded pointer hover:bg-gray-200">
                        <i className="fas fa-external-link-alt"></i>
                    </div>
                    <div className="mr-4 pointer" style={{
                        color: 'rgb(33, 83, 204)',
                        borderRadius: 8,
                        boxShadow: 'rgb(33, 83, 204) 0px 0px 0px 2px inset',
                        padding: '10px 16px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}><i className="fas fa-download mr-2"></i>Download</div>
                </div>
            </div>
            <NewDesign showNewDesign={showNewDesign} setShowNewDesign={setShowNewDesign}/>
        </div>
    )
}
export default Header;