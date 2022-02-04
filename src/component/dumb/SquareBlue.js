import React from 'react';


const SquareBlue = ({ children, color, ...props}) => {

    return (
        <div  {...props} className={`square blue-square ${color}-border`}> {children} </div>
    )
};

SquareBlue.defaultProps = {
    color: "blue"
}

export default SquareBlue;