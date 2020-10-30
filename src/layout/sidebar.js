import {useState} from 'react';
import SidebarPanel from "../components/sidebarPanel";
import menu from '../data/menu';
import SidebarMenu from "./sidebarMenu";


function Sidebar() {
  const [selectedMenu, setSelectedMenu] = useState(menu[0]);
  return (
    <div className="sidebar">
        <div className="d-flex">
            <div className="text-center" style={{width: 72}}>
                <SidebarMenu setSelectedMenu={setSelectedMenu} menu={menu}/>
            </div>
            <div className="w-100">
                <div className="font-weight-bold text-white px-2" style={{fontSize: 20, padding: '16px 0'}}>
                    {selectedMenu.name}
                </div>
                <SidebarPanel menu={selectedMenu}/>
            </div>
        </div>
    </div>
  );
}

export default Sidebar;
