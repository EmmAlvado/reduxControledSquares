import React from "react";
import { useSelector, useDispatch, connect } from "react-redux";

import SquareBlue from "../dumb/SquareBlue";
import SquareRed from "../dumb/SquareRed";

const getColor = (color = "") => {
    return {
        type: color
    }
}

const SetBorder = ({ ...props}) => {
    const dispatch = useDispatch();
    const state = useSelector(state => state.color);
    

    return(
        <div>
            <SquareBlue onClick={()=>dispatch(getColor("blue"))} color={state}>click me</SquareBlue>
            <SquareRed onClick={()=>dispatch(getColor("red"))} color={state}>click me</SquareRed>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {color: state.color}
}

export default connect(mapStateToProps, {getColor})(SetBorder); 