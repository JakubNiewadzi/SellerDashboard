import React from 'react';
import { Button } from 'reactstrap';

export const StdButtonAny = ({ children, className, color = "primary", size = "tiny", ...props }) => {
    return <Button
        className={`std-button ${color} ${size} ${className || ''}`}
        {...props}
    >{children}</Button>;
};

// export const StdButtonLarge = ({ children, ...props }) => {
//     return <StdButtonAny size="size-large" {...props}>{children}</StdButtonAny>;
// };

// export const StdButtonTiny = ({ children, ...props }) => {
//     return <StdButtonAny size="size-tiny" {...props}>{children}</StdButtonAny>;
// };
