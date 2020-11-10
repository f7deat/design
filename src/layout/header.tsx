import React from 'react'
import { useState } from 'react'
import DownloadButton from '../components/downloads/downloadButton'
import DownloadModal from '../components/downloads/downloadModal'
import NewDesign from '../modals/newDesign'

function Header() {

    const [editable, setEditable] = useState(true)
    const [showNewDesign, setShowNewDesign] = useState(false)
    const [isShowDownload, setIsShowDownload] = useState(false)

    return (
        <div>
            <div className="shadow-sm bg-white p-2 d-flex justify-content-between align-items-center">
                <div className="d-flex">
                    <div className="py-1 px-3 font-weight-bold text-primary">
                        Design
                </div>
                    <div onClick={() => setShowNewDesign(!showNewDesign)} className="py-1 px-3 text-dark hover:bg-gray-200 cursor-pointer rounded" style={{ fontWeight: 500, fontSize: '0.875rem' }}>
                        New design
                </div>
                    <div className="py-1 px-3 text-dark hover:bg-gray-200 cursor-pointer rounded" style={{ fontWeight: 500, fontSize: '0.875rem' }}>
                        New project
                    </div>
                    <div className="py-1 px-3 text-dark hover:bg-gray-200 cursor-pointer rounded" style={{ fontWeight: 500, fontSize: '0.875rem' }}>
                        <i className="fas fa-reply cursor-pointer"></i>
                    </div>
                    <div className="py-1 px-3 text-dark hover:bg-gray-200 cursor-pointer rounded" style={{ fontWeight: 500, fontSize: '0.875rem' }}>
                        <i className="fas fa-share cursor-pointer"></i>
                    </div>
                </div>
                <div className="d-flex align-items-center">
                    <input onDoubleClick={() => setEditable(false)} disabled={editable} type="text" className="hover:bg-gray-200 py-1 px-2 rounded" value="Instagram Post 1080x1080 px" style={{ outline: 'none', border: 'none', minWidth: '200px' }} />
                    <i className="fas fa-cloud-upload-alt text-success ml-2 p-2 rounded hover:bg-gray-200 cursor-pointerpointer"></i>
                </div>
                <div className="d-flex align-items-center">
                    <div className="px-2 py-1 mr-2 rounded cursor-pointerhover:bg-gray-200">
                        <i className="fas fa-share-alt"></i>
                    </div>
                    <div className="px-2 py-1 mr-3 rounded cursor-pointerhover:bg-gray-200">
                        <i className="fas fa-external-link-alt"></i>
                    </div>
                    <DownloadButton isShowDownload={isShowDownload} setIsShowDownload={setIsShowDownload}/>
                </div>
            </div>
            <NewDesign showNewDesign={showNewDesign} setShowNewDesign={setShowNewDesign}/>
            <DownloadModal isShowDownload={isShowDownload} setIsShowDownload={setIsShowDownload}/>
        </div>
    )
}
export default Header;