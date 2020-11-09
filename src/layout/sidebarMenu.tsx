import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activeMenu } from "../storages/actions/menuAction";

function SidebarMenu() {

    const dispatch = useDispatch();
    const menus = useSelector((state: any) => state.menuReducer.menu);

    const [activeId, setActiveId] = useState(menus[0].id)

    const handleMenuClick = (id: number) => {
        dispatch(activeMenu(id))
        setActiveId(id)
    }

    return (
        <div className="sidebarMenu">
            {
                menus.map((x: any) => {
                    return (
                        <div key={x.id} className={activeId === x.id ? "p-3 text-white cursor-default" : "p-3 cursor-pointer hover:text-white text-gray-600"} onClick={() => handleMenuClick(x.id)}>
                            <div className="text-center">
                                <i className={x.icon} style={{ fontSize: 24 }}></i>
                            </div>
                            <div style={{ fontSize: 8 }}>
                                {x.name}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default SidebarMenu
