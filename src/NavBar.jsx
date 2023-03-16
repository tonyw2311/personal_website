import {Link} from "react-router-dom"

const NavBar =()=>{

    return(
        <div className="fixed top-0  left-0 h-16 w-screen m-0 z-50
        flex flex-row justify-end
        text-white shadow-xl">

            <Name text={"Anthony Wong"}/>

            <Link className="navbar-icon" to="/">Home</Link>
            <Link className="navbar-icon" to="/about">About</Link>
            <Link className="navbar-icon" to="/projects">Projects</Link>
            <Link className="navbar-icon" to="/resume">Resume</Link>
 
        </div>
    )
}



const Name =({text}) =>(
    <div className="name-caligraphy" >
        {text}
    </div>
)

export default NavBar