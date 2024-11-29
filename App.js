import React from "react";
import ReactDOM from "react-dom/client"
 
 
const root = ReactDOM.createRoot(document.getElementById("root"));


const TitleComponent = ()=><h1>Namaste React Course🚀</h1>
const BodyComponent = ()=>(<div id="body">
            This is a React course conducted by Akshay Saini which is very popular and good.
        </div>)

// create a container component
const ContainerComponent = ()=>(<div id="container">
        
        {TitleComponent()}
        <BodyComponent/>
    </div>)


root.render(<ContainerComponent/>);
 