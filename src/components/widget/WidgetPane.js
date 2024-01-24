import React from 'react';
import { RowEdgeContainer } from "../common/EdgeContainer";

export const RowEdgeWidgetPane = ({ className, ...props }) => {
    return <RowEdgeContainer className={`Pane ${className || ''}`} {...props}/>;
}
