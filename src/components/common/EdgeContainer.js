import React from 'react';

export const RowEdgeContainer = ({ left, right, style, ...props }) => {
    return <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", ...style }} {...props}>
        {left}
        {right}
    </div>;
};

export const ColumnEdgeContainer = ({ top, bottom, alignItems = "center", style, ...props }) => {
    return <div style={{ display: 'flex', flexDirection: 'column', alignItems: alignItems, ...style }}{...props}>
        <div style={{ marginBottom: 'auto' }}>{top}</div>
        <div style={{ marginTop: 'auto' }}>{bottom}</div>
    </div>;
};
