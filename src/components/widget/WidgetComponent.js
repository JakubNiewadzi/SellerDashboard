import React from 'react';
import { RowEdgeContainer } from "../common/EdgeContainer";
import { ColumnSmallGappedList } from '../common/LinearGappedList';
import { LoadingWrapper } from 'components/common/LoadingWrapper';

export const WidgetComponent = ({ children, title, remainder, isLoading, ...props }) => {
    return <ColumnSmallGappedList className="std-widget" {...props}>
        <RowEdgeContainer
            left={<span>{title}</span>}
            right={remainder}
        />
        <LoadingWrapper isLoading={isLoading}>
            {children}
        </LoadingWrapper>
    </ColumnSmallGappedList>
}
