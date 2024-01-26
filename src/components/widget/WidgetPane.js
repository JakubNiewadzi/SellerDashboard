import React from 'react';
import { RowEdgeContainer } from "../common/EdgeContainer";
import { ColumnEdgeContainer } from "../common/EdgeContainer";

export const RowEdgeWidgetPane = ({ className, ...props }) => {
    return <RowEdgeContainer className={`Pane ${className || ''}`} {...props} />;
}

export const ColumnEdgePane = ({ top, bottom, className, ...props }) => {
    return <ColumnEdgeContainer className={`Pane || ${className}`} {...props}
        top={top}
        bottom={bottom}
    />
}
