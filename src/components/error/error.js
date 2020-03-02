import React from 'react';

class ErrorPage extends React.Component {
    componentDidMount(){
        document.title = "SSR-Error"
    }
    render() {
    return(
        <div>
            <title>Error</title>
            <h1>404 Not Found</h1>
        </div>
    );
    }
}

export default ErrorPage;