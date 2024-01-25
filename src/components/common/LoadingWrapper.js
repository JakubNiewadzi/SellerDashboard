import React from 'react';

export const LoadingWrapper = ({ children, isLoading, ...props }) => {
    return isLoading ? <img src="/spinner.gif" {...props}/> : <>{children}</>;
};
