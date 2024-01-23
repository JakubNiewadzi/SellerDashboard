import React from 'react';

export const RowEdgeContainer = ({ left, right, style, ...props }) => {
    return <div style={{ ...style, display: "flex", flexDirection: "row", justifyContent: "space-between" }} {...props}>
        {left}
        {right}
    </div>;
};

// export const ColumnEdgeContainer = ({ left, right, ...props }) => {
//     return <div {...props} style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
//         {left}
//         {right}
//     </div>;
// };
