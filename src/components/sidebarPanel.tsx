import Texts from "../panels/texts";
import Template from "../panels/template";
import Tab from "./tab";
import React from "react";
import { connect } from "react-redux";
import PhotoControl from "../panels/photos/photoControl";

const mapStateToProps = (state: any) => ({
  menu: state.menuReducer.menu.find((x: any) => x.isActive === true)
})

function SidebarPanel(props: any) {
  let placeholder = `Search ${props.menu.name.toLowerCase()}...`
  return (
    <div className="panel">
      <Tab menu={props.menu} />
      <input type="search" className="search" placeholder={placeholder} />
      {renderPanel(props.menu.name)}
    </div>
  );
}

function renderPanel(param: any) {
  switch (param) {
    case 'Text':
      return <Texts />;
    case 'Photo':
      return <PhotoControl />;
    case 'Template':
      return <Template />;
    default:
      return <div></div>;
  }
}

export default connect(mapStateToProps)(SidebarPanel)