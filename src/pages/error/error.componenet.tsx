import React, { useEffect } from 'react';

export default function ErrorPage() {
    useEffect(() => {
        document.title = "SSR-Error";
    });
    return(
        <React.Fragment>
            <title>Error</title>
            <h1>404 Not Found</h1>
        </React.Fragment>
    );
}