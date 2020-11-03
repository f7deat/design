function Tab(props) {
    return (
        <div className={props.menu.hasTab ? "tab" : "d-none"}>
            {renderName(props.menu.name)}
        </div>
    )
}

function renderName(param) {
    switch (param) {
        case 'Videos':
            return (
                <div className="d-flex justify-content-between">
                    <div className="tab-item active w-100">
                        Video
                </div>
                    <div className="tab-item w-100">
                        Background
                </div>
                </div>
            );
        case 'Text':
            return (
                <div className="d-flex justify-content-between">
                    <div className="tab-item active w-100">
                        Styles
                </div>
                    <div className="tab-item w-100">
                        My Fonts
                </div>
                </div>
            );
        default:
            return <div></div>;
    }
}

export default Tab