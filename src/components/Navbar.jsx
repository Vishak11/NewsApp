const Navbar = ({ setCategory }) => {
    return (
        <div>
            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#"><span className="badge bg-light text-dark fs-4 ">News18</span></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                {['Technology', 'Business', 'Health', 'Science', 'Sports', 'Entertainment'].map((category,index)=>(
                                <li className="nav-item" key={index}>
                                    <div className="nav-link" style={{ cursor: 'pointer' }} onClick={() => setCategory(category.toLowerCase())}>{category}</div>
                                </li>
                                ))}


                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}
export default Navbar