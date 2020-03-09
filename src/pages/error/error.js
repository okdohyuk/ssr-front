import React, { useEffect } from 'react';

export default function ErrorPage() {
    useEffect(() => {
        document.title = "SSR-Error";
    });
    return(
        <div>
            <title>Error</title>
            <h1>404 Not Found</h1>
        </div>
    );
}