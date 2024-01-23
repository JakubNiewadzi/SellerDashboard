import React from 'react';
import { RowEdgeContainer } from "../common/EdgeContainer";
import { ColumnSmallGappedList } from '../common/LinearGappedList';

export const WidgetComponent = ({ children, title, remainder }) => {
    return <ColumnSmallGappedList className="std-widget">
        <RowEdgeContainer
            left={<span>{title}</span>}
            right={remainder}
        ></RowEdgeContainer>
        <div>
            {children}
        </div>
    </ColumnSmallGappedList>
}
