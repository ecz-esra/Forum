import { Link } from "react-router-dom";

const Header=({addLink})=>{
    return(
        <header>
            <h1>Forum</h1>
            {
             addLink ? (
                <Link to={"/"}>Return to homepage</Link>
             ) : (
                <Link to={"/add-post"}>Create Post</Link>
             )   
            }
            
        </header>
    )
}

export default Header;