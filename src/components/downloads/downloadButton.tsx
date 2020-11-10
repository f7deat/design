import React from "react";

export default function DownloadButton(props: any) {
    return (
        <div>
            <div className="mr-4 cursor-pointer d-flex align-items-center justify-content-center" style={{
                color: 'rgb(33, 83, 204)',
                borderRadius: 8,
                boxShadow: 'rgb(33, 83, 204) 0px 0px 0px 2px inset',
                padding: '10px 16px'
            }} onClick={() => props.setIsShowDownload(true)}><i className="fas fa-download mr-2"></i>Download</div>
        </div>
    )
}