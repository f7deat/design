function SidebarPanel(props) {
    return (
        <div className="panel">
            <div className={props.menu.hasTab ? "tab" : "d-none"}>
                <div className="tab-item active">
                    Premium
                </div>
                <div className="tab-item">
                    Depositphotos
                </div>
            </div>
            <input type="search" className="search" placeholder="Search template..." />
        </div>
    );
}

export default SidebarPanel;
