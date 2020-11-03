import Texts from "../panels/texts";
import Photo from "../panels/photo";
import Template from "../panels/template";

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
            {renderPanel(props.menu.name)}
        </div>
    );
}

function renderPanel(param) {
    switch(param) {
      case 'Text':
        return <Texts/>;
      case 'Photo':
        return <Photo/>;
      case 'Template':
        return <Template/>;
      default:
        return <div></div>;
    }
  }

export default SidebarPanel;
