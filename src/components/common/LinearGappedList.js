import React from 'react';

export const LinearGappedList = ({ children, direction, style, ...props }) => {
    return <div style={{display: "flex", flexDirection: direction, ...style}} {...props}>
        {children}
    </div>;
};

export const ColumnGappedList = ({ children, ...props }) => {
    return <LinearGappedList direction="column" {...props}>{children}</LinearGappedList>;
};

export const RowGappedList = ({ children, ...props }) => {
    return <LinearGappedList direction="row" {...props}>{children}</LinearGappedList>;
};
