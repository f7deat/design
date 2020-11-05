import React from 'react';
import SidebarPanel from '../components/sidebarPanel';
import SidebarMenu from "./sidebarMenu";

function Sidebar() {
  return (
    <div className="sidebar">
        <div className="d-flex">
            <div className="text-center" style={{width: 72}}>
                <SidebarMenu/>
            </div>
            <div className="w-100">
                <div className="font-weight-bold text-white px-2" style={{fontSize: 20, padding: '16px 0'}}>
                    Template
                </div>
                <SidebarPanel/>
            </div>
        </div>
    </div>
  );
}

export default Sidebar
