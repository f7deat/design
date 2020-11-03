import Texts from "../panels/texts";
import Photo from "../panels/photo";
import Template from "../panels/template";
import Tab from "../components/tab";

function SidebarPanel(props) {
  return (
    <div className="panel">
      <Tab menu={props.menu} />
      <input type="search" className="search" placeholder="Search template..." />
      {renderPanel(props.menu.name)}
    </div>
  );
}

function renderPanel(param) {
  switch (param) {
    case 'Text':
      return <Texts />;
    case 'Photo':
      return <Photo />;
    case 'Template':
      return <Template />;
    default:
      return <div></div>;
  }
}

export default SidebarPanel;
