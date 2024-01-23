import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

export const StdButtonAny = ({ children, color = "primary", size = "tiny", ...props }) => {
    return <Button tag={Link} {...props} className={`std-button ${color} ${size}`}>
        {children}
    </Button>;
};

export const StdButtonLarge = ({ children, ...props }) => {
    return <StdButtonAny {...props} size="large">{children}</StdButtonAny>;
};

export const StdButtonTiny = ({ children, ...props }) => {
    return <StdButtonAny {...props} size="tiny">{children}</StdButtonAny>;
};
