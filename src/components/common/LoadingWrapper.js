import React from 'react';

export const LoadingWrapper = ({ children, isLoading, ...props }) => {
    return <div {...props}>
        {isLoading ? <img src="/spinner.gif" /> : children}
    </div>;
};
