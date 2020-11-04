import React from "react"

function Texts() {
    return (
        <div className="text-wrapper">
            <div className="text-group">
                <div className="panel-item text-white">
                    <h2>Heading</h2>
                </div>
                <div className="panel-item text-white">
                    <h6>Subheading</h6>
                </div>
                <div className="panel-item text-white">
                    Body text
                </div>
            </div>
            <div className="text-group">
                <label className="font-weight-bold text-white">Text Styles</label>
                <div className="row">
                    <div className="col-md-6">
                        <div className="panel-item">
                            <img src="https://static.crello.com/api/templates/5f967e13a637ee11e36955cd/thumbnails/0?size=360" alt="" className="img-fluid"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="panel-item">
                        <img src="https://static.crello.com/api/templates/5f967e12a637ee11e3695464/thumbnails/0?size=360" alt="" className="img-fluid"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="panel-item">
                        <img src="https://static.crello.com/api/templates/5f967e12a637ee11e36953d9/thumbnails/0?size=360" alt="" className="img-fluid"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Texts