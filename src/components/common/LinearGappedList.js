import React from 'react';

export const LinearGappedList = ({ children, gap, direction, style, ...props }) => {
    return <div style={{display: "flex", gap: gap, flexDirection: direction, ...style}} {...props}>
        {children}
    </div>;
};

export const ColumnGappedList = ({ children, ...props }) => {
    return <LinearGappedList direction="column" {...props}>{children}</LinearGappedList>;
};

export const RowGappedList = ({ children, ...props }) => {
    return <LinearGappedList direction="row" {...props}>{children}</LinearGappedList>;
};

// export const ColumnZeroGappedList = ({ children, ...props }) => {
//     return <LinearGappedList gap="0px" direction="column" {...props}>{children}</LinearGappedList>;
// };

// export const ColumnTinyGappedList = ({ children, ...props }) => {
//     return <LinearGappedList gap="5px" direction="column" {...props}>{children}</LinearGappedList>;
// };

// export const ColumnSmallGappedList = ({ children, ...props }) => {
//     return <LinearGappedList gap="10px" direction="column" {...props}>{children}</LinearGappedList>;
// };

// export const ColumnMediumGappedList = ({ children, ...props }) => {
//     return <LinearGappedList gap="18px" direction="column" {...props}>{children}</LinearGappedList>;
// };

// export const ColumnLargeGappedList = ({ children, ...props }) => {
//     return <LinearGappedList gap="30px" direction="column" {...props}>{children}</LinearGappedList>;
// };

// export const RowZeroGappedList = ({ children, ...props }) => {
//     return <LinearGappedList gap="0px" direction="row" {...props}>{children}</LinearGappedList>;
// };

// export const RowTinyGappedList = ({ children, ...props }) => {
//     return <LinearGappedList gap="5px" direction="row" {...props}>{children}</LinearGappedList>;
// };

// export const RowSmallGappedList = ({ children, ...props }) => {
//     return <LinearGappedList gap="10px" direction="row" {...props}>{children}</LinearGappedList>;
// };

// export const RowMediumGappedList = ({ children, ...props }) => {
//     return <LinearGappedList gap="18px" direction="row" {...props}>{children}</LinearGappedList>;
// };

// export const RowLargeGappedList = ({ children, ...props }) => {
//     return <LinearGappedList gap="30px" direction="row" {...props}>{children}</LinearGappedList>;
// };
