import React from 'react';
import { useState } from 'react';

let pageItems = [
    { id: 1, pageIndex: 1 },
    { id: 2, pageIndex: 2 }
]

function Page() {
    const [togglePageBar, setTogglePageBar] = useState(false)
    return (
        <div>
            <div className="page shadow-sm">
                <div className="d-flex justify-content-center align-items-center">
                    <button className="btn" onClick={() => setTogglePageBar(!togglePageBar)}>
                        <i className="fas fa-columns mr-2"></i>Pages
                    </button>
                </div>
            </div>
            <PageBar togglePageBar={togglePageBar} setTogglePageBar={setTogglePageBar} />
        </div>
    )
}

function PageBar(props: any) {

    function addPage() {
         let id = pageItems[pageItems.length - 1].id + 1;
         pageItems.push({id: id, pageIndex: id});
    }

    return (
        <div className={props.togglePageBar ? "page-bar p-2" : "d-none"}>
            <div className="d-flex align-items-center mb-2">
                <div className="flex-grow-1">
                    Pages &bull; 1
                </div>
                <i className="fas fa-angle-double-right text-black-50 cursor-pointer" onClick={() => props.setTogglePageBar(!props.togglePageBar)}></i>
            </div>
            {pageItems.map(x => {
                return (
                    <PageItem pageIndex={x.pageIndex} key={x.id}/>
                )
            })}
            <button onClick={() => addPage()} className="btn-light btn btn-block" style={{ bottom: 0, right: 0 }}>
                <i className="fas fa-plus"></i> New page
            </button>
        </div>
    )
}

function PageItem(props: any) {
    return (
        <div className="mb-1 p-2 d-flex align-items-center justify-content-center cursor-pointerpage-item">
            <div className="mr-1">{props.pageIndex}</div>
            <div className="flex-grow-1 border rounded" style={{ height: 70 }}>

            </div>
        </div>
    )
}

export default Page