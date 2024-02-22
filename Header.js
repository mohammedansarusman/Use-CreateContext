import { useContext } from "react";
import userContext from "./UserContext";

const Header = () =>{
    const namecontext = useContext(userContext);
    const {name} = namecontext

    console.log(namecontext);
    return(
        <>
            <div className="header-div">
                <h1>{name}</h1>
            </div>
        </>
    )
}

export default Header;
