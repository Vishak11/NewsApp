const Newsitem = ({title,description,src,url}) => {
    return (
        

            <div className="card bg-dark text-light d-inline-block my-3 mx-3 mb-3 py-2 px-2" style={{maxWidth:"340px", maxHeight:"540px"}}>
                <img src={src} style={{height:"200px", width:"340pxpx"}} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title.slice(0,50)}</h5>
                    <p className="card-text">{description?description.slice(0,90):"unavailabe"}</p>
                    <a href={url} className="btn btn-secondary">Read more</a>
                </div>
            </div>

        
    )
}
export default Newsitem