function SidebarMenu(props) {
    return (
        <div className="sidebarMenu">
            <SidebarMenuItem name="Template" icon="fas fa-inbox" setMenuName={props.setMenuName}/>
            <SidebarMenuItem name="Photo" icon="fas fa-image" setMenuName={props.setMenuName}/>
            <SidebarMenuItem name="Video" icon="fas fa-video" setMenuName={props.setMenuName}/>
            <SidebarMenuItem name="Music" icon="fas fa-music" setMenuName={props.setMenuName}/>
        </div>
    );
}

function SidebarMenuItem(props) {
    return (
        <div className="p-3 sidebarMenuItem" onClick={() => props.setMenuName(props.name)}>
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
