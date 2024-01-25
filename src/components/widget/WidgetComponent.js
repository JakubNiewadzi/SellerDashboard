import React from 'react';
import { RowEdgeContainer } from "../common/EdgeContainer";
import { ColumnGappedList } from '../common/LinearGappedList';
import { LoadingWrapper } from 'components/common/LoadingWrapper';

export const WidgetComponent = ({ children, title, remainder, isLoading, ...props }) => {
    return <ColumnGappedList className="std-widget size-tiny" {...props}>
        <RowEdgeContainer className="padding-zero flex-align-center"
            left={<span className="size-large bold">{title}</span>}
            right={remainder}
        />
        <LoadingWrapper isLoading={isLoading} style={{width: "100px", margin: "auto"}}>
            {children}
        </LoadingWrapper>
    </ColumnGappedList>
}
