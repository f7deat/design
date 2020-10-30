function SidebarMenu(props) {
    return (
        <div className="sidebarMenu">
            {
                props.menu.map(x => {
                    return(
                        <SidebarMenuItem key={x.id} name={x.name} icon={x.icon} setSelectedMenu={props.setSelectedMenu} menu={x}/>
                    )
                })
            }
        </div>
    );
}

function SidebarMenuItem(props) {
    return (
        <div className="p-3 sidebarMenuItem" onClick={() => props.setSelectedMenu(props.menu)}>
            <div className="text-center">
                <i className={props.icon} style={{fontSize: 24}}></i>
            </div>
            <div className="text-muted" style={{ fontSize: 8 }}>
                {props.name}
            </div>
        </div>
    )
}

export default SidebarMenu;
