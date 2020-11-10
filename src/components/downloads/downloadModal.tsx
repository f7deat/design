import React from "react";

export default function DownloadModal(props: any) {
    return (
        <div className={props.isShowDownload ? "" : "d-none"}>
            <div style={{ backgroundColor: 'rgba(18,19,22,.64)', zIndex: 1 }} className="h-screen w-screen position-fixed top-0">
                <div className="rounded bg-white p-4 shadow" style={{ width: 790, height: 560, position: 'fixed', top: '20%', left: '30%' }}>
                    <div className="position-relative">
                    <button onClick={() => props.setIsShowDownload(!props.isShowDownload)} className="btn text-muted float-right"><i className="fas fa-times"></i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}