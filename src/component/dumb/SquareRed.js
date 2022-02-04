import React from 'react';


const SquareRed = ({ children, color, ...props}) => {

    return (
        <div  {...props} className={`square red-square ${color}-border`}> {children} </div>
    )
};

SquareRed.defaultProps = {
    color: "red"
  }

export default SquareRed;