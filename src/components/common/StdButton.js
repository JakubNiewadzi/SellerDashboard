import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

export const StdButtonAny = ({ children, className, color = "primary", size = "tiny", ...props }) => {
    return <Button
        // tag={Link}
        className={`std-button ${color} ${size} ${className || ''}`}
        {...props}
    >{children}</Button>;
};

export const StdButtonLarge = ({ children, ...props }) => {
    return <StdButtonAny size="large" {...props}>{children}</StdButtonAny>;
};

export const StdButtonTiny = ({ children, ...props }) => {
    return <StdButtonAny size="tiny" {...props}>{children}</StdButtonAny>;
};
