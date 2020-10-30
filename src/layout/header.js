function Header() {
    return (
        <div className="shadow-sm p-2 d-flex justify-content-between align-items-center">
            <div className="d-flex">
                <div className="px-3 font-weight-bold text-primary">
                    crello
            </div>
                <div className="px-3 text-dark" style={{fontWeight: 500, fontSize: '0.875rem'}}>
                    New design
            </div>
                <div className="px-3 text-dark" style={{fontWeight: 500, fontSize: '0.875rem'}}>
                    New project
            </div>
            </div>
            <div>
                Instagram Post 1080x1080 px <i className="fas fa-cloud-upload-alt text-success ml-2"></i>
            </div>
            <div className="d-flex align-items-center">
                <div className="px-4">
                    <i className="fas fa-share-alt"></i>
                </div>
                <div className="mr-4">
                    <i className="fas fa-external-link-alt"></i>
                </div>
                <div className="mr-4 pointer" style={{
                    color: 'rgb(33, 83, 204)',
                    borderRadius: 8,
                    boxShadow: 'rgb(33, 83, 204) 0px 0px 0px 2px inset',
                    padding: '10px 16px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}><i className="fas fa-download mr-2"></i>Download</div>
            </div>
        </div>
    )
}
export default Header;