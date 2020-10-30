function Tab(props) {
    return (
        <div className="d-flex justify-content-between">
            {
                props.tabs.map(x => {
                    return(
                        <div>{x.name}</div>
                    )
                })
            }
        </div>
    )
}

export default Tab