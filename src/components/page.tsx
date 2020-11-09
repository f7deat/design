import React, { memo, useCallback } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPage } from '../storages/actions/pageAction';
import PageType from '../storages/types/pageType';

interface pageItemProp {
    page: PageType
}

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

    let pages = useSelector((state: any) => state.pageReducer.pages);
    const dispatch = useDispatch();

    const dispatchAddPage = useCallback( () => {
        let id = pages[pages.length - 1].id + 1;
        let page: PageType = {
            id: id, pageIndex: id, isActive: false
        }
        dispatch(addPage(page))
    }, [dispatch, pages])

    return (
        <div className={props.togglePageBar ? "page-bar shadow-sm p-2" : "d-none"}>
            <div className="d-flex align-items-center mb-2">
                <div className="flex-grow-1">
                    Pages &bull; {pages.find((x: PageType) => x.isActive === true)?.pageIndex}
                </div>
                <i className="fas fa-angle-double-right text-black-50 cursor-pointer" onClick={() => props.setTogglePageBar(!props.togglePageBar)}></i>
            </div>
            {pages.map((x: PageType) => {
                return (
                    <PageItem page={x} key={x.id} />
                )
            })}
            <button onClick={() => dispatchAddPage()} className="btn-light btn btn-block" style={{ bottom: 0, right: 0 }}>
                <i className="fas fa-plus"></i> New page
            </button>
        </div>
    )
}

function PageItem(props: pageItemProp) {
    return (
        <div className="mb-1 p-2 cursor-pointer page-item hover:bg-gray-100">
            <div className="d-flex align-items-center justify-content-center">
                <div className="mr-1">
                    {props.page.pageIndex}
                </div>
                <div className="flex-grow-1 border rounded" style={{ height: 70 }}>

                </div>
            </div>
        </div>
    )
}

export default memo(Page)