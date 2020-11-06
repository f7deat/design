import React from 'react';
import { useSelector } from 'react-redux';
import SidebarPanel from '../components/sidebarPanel';
import SidebarMenu from "./sidebarMenu";

function Sidebar() {
    
  const menu = useSelector((state: any) => state.menuReducer.currentMenu);

  return (
    <div className="sidebar">
        <div className="d-flex">
            <div className="text-center" style={{width: 72}}>
                <SidebarMenu/>
            </div>
            <div className="w-100">
                <div className="font-weight-bold text-white px-2" style={{fontSize: 20, padding: '16px 0'}}>
                    {menu}
                </div>
                <SidebarPanel/>
            </div>
        </div>
    </div>
  );
}

export default Sidebar
