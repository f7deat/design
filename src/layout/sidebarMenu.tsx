import React from "react";
import { connect } from "react-redux";
import { Menu } from "../storages/types";

const mapStateToProps = (state: any) => ({
    menu: state.menuReducer.menu
})

const mapDispatchToProps = (dispatch: any) => ({
    activeMenu: (id: number) => {
        dispatch({
            type: 'ACTIVE_MENU',
            payload: id
        })
    }
})

function SidebarMenu(props: any) {
    return (
        <div className="sidebarMenu">
            {
                props.menu.map((x: Menu) => {
                    return (
                        <div key={x.id} className={x.isActive ? "p-3 text-white cursor-default" : "p-3 cursor-pointer hover:text-white text-gray-600"} onClick={() => props.activeMenu(x.id)}>
                            <div className="text-center">
                                <i className={x.icon} style={{ fontSize: 24 }}></i>
                            </div>
                            <div className="text-muted" style={{ fontSize: 8 }}>
                                {x.name}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(SidebarMenu)
