import React from 'react';
import { Button } from 'reactstrap';

export const StdButtonAny = ({ children, className, color = "primary", ...props }) => {
    return <Button
        className={`std-button ${color} ${className || ''}`}
        {...props}
    >{children}</Button>;
};
