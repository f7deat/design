import React from "react"
import { connect } from "react-redux"
import { Menu } from "../storages/types"

interface SidebarMenuItemProps {
    menu: Menu
}

const mapStateToProps = (state: any) => ({
    menu: state.menuReducer.menu
})


function SidebarMenuItem(props: any) {
    console.log(props)
    return (
        <div className={props.menu.isActive ? "p-3 text-white cursor-default" : "p-3 cursor-pointer hover:text-white text-gray-600"} onClick={() => handleSelectMenu(props)}>
            <div className="text-center">
                <i className={props.menu.icon} style={{fontSize: 24}}></i>
            </div>
            <div className="text-muted" style={{ fontSize: 8 }}>
                {props.menu.name}
            </div>
        </div>
    )
}

function handleSelectMenu(props: SidebarMenuItemProps) {
    console.log(props)
}

export default connect(mapStateToProps)(SidebarMenuItem)