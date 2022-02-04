import { useState } from "react";
import SquareBlue from "../dumb/SquareBlue";
import SquareRed from "../dumb/SquareRed";

const BorderController = ({children, ...props}) => {

    const [color, setColor] = useState(""); // define the state color
    
    const changeColor = (color) => {
        setColor(color); //update state
    }
    
    return (
        <div className="border-controller">
            <SquareBlue color={color} onClick={()=>changeColor("blue")}>click me</SquareBlue>
            <SquareRed color={color} onClick={()=>changeColor("red")}>click me</SquareRed>
        </div>
        );
}

export default BorderController;