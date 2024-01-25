import React from 'react';
import { Spinner } from 'reactstrap';

export const LoadingWrapper = ({ children, isLoading, size,...props }) => {
    // return isLoading ? <img src="/spinner.gif" {...props}/> : <>{children}</>;
    return isLoading ? <Spinner color="primary" className="align-self-center" style={{
        height: size,
        width: size,
      }} {...props}/> : <>{children}</>;
};
