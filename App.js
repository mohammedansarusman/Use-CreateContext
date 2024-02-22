import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import userContext from "./UserContext";


const App = () =>{
    return(
        <div>
            <div className="main-div">
                <userContext.Provider value={{name:"ansar"}}>
                    <Header />
                </userContext.Provider>
            </div>
        </div>
    ) 
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)

